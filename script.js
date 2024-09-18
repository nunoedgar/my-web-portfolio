function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('scrollToNext');
  let sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;

  // Initialize IntersectionObserver to track the current visible section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentSectionIndex = Array.from(sections).indexOf(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Adjust the threshold as needed

  // Observe all sections
  sections.forEach(section => observer.observe(section));

  button.addEventListener('click', function () {
    if (currentSectionIndex < sections.length - 1) {
      // Move to the next section
      currentSectionIndex++;
      sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
  });
});
