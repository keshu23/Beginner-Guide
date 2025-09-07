const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isVisible = navLinks.getAttribute('data-visible') === 'true';
  navLinks.setAttribute('data-visible', !isVisible);
  menuToggle.setAttribute('aria-expanded', !isVisible);
});