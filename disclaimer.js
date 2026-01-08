document.addEventListener('DOMContentLoaded', () => {
  // Reveal disclaimer section
  const section = document.querySelector('.disclaimer-section');
  if (section) {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && section.classList.add('visible')),
      { threshold: 0.25 }
    );
    observer.observe(section);
  }

  // Dropdown accessibility
  const dropdown = document.querySelector('.nav-dropdown');
  const toggle = dropdown?.querySelector('.nav-toggle');
  const panel = document.getElementById('nav-categories');

  if (dropdown && toggle && panel) {
    toggle.addEventListener('focus', () => {
      panel.classList.add('open-focus');
      toggle.setAttribute('aria-expanded', 'true');
    });

    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        panel.classList.remove('open-focus');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.blur();
      }
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        panel.classList.remove('open-focus');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  console.log('🌐 Multilingual Disclaimer loaded — English, Hindi, Urdu, Bengali for all explorers.');
});