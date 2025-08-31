// Initialize the AOS library for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true, // animations trigger only once when scrolled into view
  });
});