const images = document.querySelectorAll('.grid-container-child');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200); // délai progressif (200ms entre chaque image)
      observer.unobserve(entry.target); // pour éviter de les réanimer après
    }
  });
}, {
  threshold: 0.2
});

images.forEach(img => observer.observe(img));
