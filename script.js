// Small interactivity: mobile menu toggle + simple form handler + year
document.addEventListener('DOMContentLoaded', function () {
  // year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // menu toggle on small screens
  const btn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (btn && navLinks) {
    btn.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.right = '24px';
      navLinks.style.top = '64px';
      navLinks.style.background = '#fff';
      navLinks.style.padding = '12px';
      navLinks.style.borderRadius = '8px';
      navLinks.style.boxShadow = '0 8px 25px rgba(12,12,20,0.08)';
    });
  }

  // simple form submission (client-side only)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Replace this with a real endpoint (Formspree, Netlify Forms, etc.)
      alert('Thanks! This demo does not send messages. To enable form submissions, connect to Formspree or Netlify Forms and update the form "action" attribute.');
      form.reset();
    });
  }
});