// contact.js — complete: dropdown accessibility, reveal animation, copy to clipboard

document.addEventListener('DOMContentLoaded', () => {
  // 1) Reveal contact card on scroll (matches About/Home feel)
  const contactSection = document.querySelector('.contact-section');
  if (contactSection) {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && contactSection.classList.add('visible')),
      { threshold: 0.25 }
    );
    observer.observe(contactSection);
  }

  // 2) Nav dropdown accessibility (same behavior across pages)
  const dropdown = document.querySelector('.nav-dropdown');
  const toggle = dropdown?.querySelector('.nav-toggle');
  const panel = document.getElementById('nav-categories');

  if (dropdown && toggle && panel) {
    // Open on focus
    toggle.addEventListener('focus', () => {
      panel.classList.add('open-focus');
      toggle.setAttribute('aria-expanded', 'true');
    });

    // Close on Escape
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePanel();
        toggle.blur();
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) closePanel();
    });

    function closePanel() {
      panel.classList.remove('open-focus');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  // 3) Copy-to-clipboard buttons (optional; add buttons in HTML if you want)
  // Example HTML:
  // <div class="copy-row">
  //   <button class="copy-btn" data-copy="hello@elipseverse.com">Copy Email</button>
  //   <button class="copy-btn" data-copy="feedback@elipseverse.com">Copy Feedback</button>
  // </div>
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(text);
        btn.classList.add('success');
        btn.textContent = 'Copied!';
        setTimeout(() => {
          btn.classList.remove('success');
          btn.textContent = 'Copy';
        }, 1600);
      } catch {
        btn.textContent = 'Press Ctrl+C';
        setTimeout(() => (btn.textContent = 'Copy'), 1600);
      }
    });
  });

  // Friendly console note
  console.log('💌 Contact page loaded — invite users to share feedback, suggestions, and error reports.');
});