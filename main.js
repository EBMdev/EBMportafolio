// SCROLL SUAVE PARA LOS LINKS DEL NAV
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ANIMACIÓN AL HACER SCROLL
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.1 }
);

const animatedElements = document.querySelectorAll(
  '.hero, .about, .project-card, .contact'
);

animatedElements.forEach(el => observer.observe(el));

// EFECTO DE ESCRITURA (OPCIONAL)
const heroText = document.querySelector('.hero h2 span');

if (heroText) {
  const text = heroText.textContent;
  heroText.textContent = '';
  let i = 0;

  const typing = setInterval(() => {
    heroText.textContent += text[i];
    i++;
    if (i === text.length) clearInterval(typing);
  }, 100);
}
