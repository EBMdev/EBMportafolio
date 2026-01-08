// main.js
// JavaScript base para el portafolio
// Mantenerlo limpio y escalable

// ---------- NAV ACTIVE LINK ----------
const currentPath = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.style.color = 'var(--green)';
  }
});

// ---------- SIMPLE FADE-IN ANIMATION ----------
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

const animatedElements = document.querySelectorAll('section, .card');

animatedElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ---------- SKILLS PROGRESS ANIMATION ----------
const skillFills = document.querySelectorAll('.skill-fill');
skillFills.forEach(fill => {
  fill.style.width = '0'; // empezar en 0
});

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      fill.style.width = fill.dataset.skill; // animar al entrar en pantalla
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill').forEach(skill => skillObserver.observe(skill));

// ---------- FUTURE FEATURES ----------
// - Dark / Light mode
// - Project filters
// - Contact form validation
// - Animations avanzadas
