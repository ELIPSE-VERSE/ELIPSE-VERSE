// Categories dropdown opens on hover and closes on mouse leave or Escape key

const dropdown = document.querySelector('.nav-dropdown');
const toggle = dropdown?.querySelector('.nav-toggle');
const panel = document.getElementById('nav-categories');

if (dropdown && toggle && panel) {
  // Hover open
  dropdown.addEventListener('mouseenter', () => {
    panel.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  });

  // Leave close
  dropdown.addEventListener('mouseleave', () => {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // Keyboard accessibility
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}