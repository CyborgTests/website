const toggle = document.querySelector('[data-nav-toggle]');
const links = document.querySelector('[data-nav-links]');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.addEventListener('click', () => {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
}

for (const year of document.querySelectorAll('[data-year]')) {
  year.textContent = new Date().getFullYear();
}
