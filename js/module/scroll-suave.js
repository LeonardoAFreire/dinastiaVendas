export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });

    function scrollToSection(event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
