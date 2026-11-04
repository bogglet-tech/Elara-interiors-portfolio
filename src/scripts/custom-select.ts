/**
 * Themed dropdowns for every <select> on the site.
 *
 * Browsers don't let CSS style the open list of a native <select>, so each one is progressively enhanced:
 * the native element stays in the DOM (hidden) as the source of truth for form submission and for scripts
 * that set `.value`, and an accessible button + listbox (WAI-ARIA "select-only combobox" pattern) is
 * rendered on top in the brand style. Opt out with <select data-native>.
 */

let uid = 0;

function enhance(select: HTMLSelectElement) {
  if (select.dataset.enhanced) return;
  select.dataset.enhanced = 'true';
  const id = select.id || `cs-${++uid}`;
  select.id = id;
  const label = document.querySelector<HTMLLabelElement>(`label[for="${id}"]`);
  if (label && !label.id) label.id = `${id}-label`;

  const wrap = document.createElement('div');
  wrap.className = 'cs';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'cs__btn';
  btn.id = `${id}-btn`;
  btn.setAttribute('role', 'combobox');
  btn.setAttribute('aria-haspopup', 'listbox');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', `${id}-list`);
  if (label) btn.setAttribute('aria-labelledby', `${label.id} ${btn.id}`);
  btn.innerHTML =
    '<span class="cs__value"></span><svg class="cs__chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  const valueEl = btn.querySelector<HTMLElement>('.cs__value')!;

  const list = document.createElement('ul');
  list.className = 'cs__list';
  list.id = `${id}-list`;
  list.setAttribute('role', 'listbox');
  list.tabIndex = -1;
  if (label) list.setAttribute('aria-labelledby', label.id);

  const opts = [...select.options].map((o, i) => {
    const li = document.createElement('li');
    li.className = 'cs__opt';
    li.id = `${id}-opt-${i}`;
    li.setAttribute('role', 'option');
    li.textContent = o.text;
    if (o.disabled) li.setAttribute('aria-disabled', 'true');
    list.appendChild(li);
    return li;
  });

  // keep the native select for forms + value, but take it out of sight and of the tab order
  select.classList.add('cs__native');
  select.tabIndex = -1;
  select.setAttribute('aria-hidden', 'true');
  select.parentNode!.insertBefore(wrap, select);
  wrap.append(select, btn, list);
  label?.addEventListener('click', (e) => {
    e.preventDefault();
    btn.focus();
  });

  let active = select.selectedIndex;

  const render = () => {
    valueEl.textContent = select.options[select.selectedIndex]?.text ?? '';
    opts.forEach((li, i) => li.setAttribute('aria-selected', String(i === select.selectedIndex)));
  };
  const setActive = (i: number) => {
    active = Math.max(0, Math.min(opts.length - 1, i));
    opts.forEach((li, k) => li.classList.toggle('is-active', k === active));
    btn.setAttribute('aria-activedescendant', opts[active].id);
    opts[active].scrollIntoView({ block: 'nearest' });
  };
  const isOpen = () => btn.getAttribute('aria-expanded') === 'true';
  const open = () => {
    if (isOpen()) return;
    // open upwards if there isn't room below
    const r = btn.getBoundingClientRect();
    wrap.classList.toggle('cs--up', innerHeight - r.bottom < 300 && r.top > innerHeight - r.bottom);
    btn.setAttribute('aria-expanded', 'true');
    wrap.classList.add('is-open');
    setActive(select.selectedIndex);
  };
  const close = () => {
    btn.setAttribute('aria-expanded', 'false');
    btn.removeAttribute('aria-activedescendant');
    wrap.classList.remove('is-open');
  };
  const choose = (i: number) => {
    if (opts[i].getAttribute('aria-disabled') === 'true') return;
    if (select.selectedIndex !== i) {
      select.selectedIndex = i;
      select.dispatchEvent(new Event('input', { bubbles: true }));
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
    render();
    close();
    btn.focus();
  };

  btn.addEventListener('click', () => (isOpen() ? close() : open()));
  opts.forEach((li, i) => {
    li.addEventListener('mousedown', (e) => e.preventDefault()); // keep focus on the button
    li.addEventListener('click', () => choose(i));
    li.addEventListener('mousemove', () => active !== i && setActive(i));
  });

  let typed = '';
  let typedAt = 0;
  btn.addEventListener('keydown', (e) => {
    const k = e.key;
    if (!isOpen()) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(k)) {
        e.preventDefault();
        open();
      }
      return;
    }
    if (k === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
    else if (k === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    else if (k === 'Home') { e.preventDefault(); setActive(0); }
    else if (k === 'End') { e.preventDefault(); setActive(opts.length - 1); }
    else if (k === 'Enter' || k === ' ') { e.preventDefault(); choose(active); }
    else if (k === 'Escape') { e.preventDefault(); close(); }
    else if (k === 'Tab') { close(); }
    else if (k.length === 1) {
      // type-to-jump
      const now = Date.now();
      typed = now - typedAt > 600 ? k.toLowerCase() : typed + k.toLowerCase();
      typedAt = now;
      const hit = opts.findIndex((li) => li.textContent!.toLowerCase().startsWith(typed));
      if (hit >= 0) setActive(hit);
    }
  });
  btn.addEventListener('blur', () => setTimeout(() => !wrap.contains(document.activeElement) && close(), 0));
  document.addEventListener('pointerdown', (e) => {
    if (isOpen() && !wrap.contains(e.target as Node)) close();
  });

  // reflect value changes made by other scripts (e.g. package preselect) or form.reset()
  select.addEventListener('change', render);
  select.form?.addEventListener('reset', () => setTimeout(render, 0));
  const desc = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value')!;
  Object.defineProperty(select, 'value', {
    get() {
      return desc.get!.call(this);
    },
    set(v) {
      desc.set!.call(this, v);
      render();
    },
  });

  render();
}

export function enhanceSelects(root: ParentNode = document) {
  root.querySelectorAll<HTMLSelectElement>('select:not([data-native]):not([multiple])').forEach(enhance);
}

enhanceSelects();
