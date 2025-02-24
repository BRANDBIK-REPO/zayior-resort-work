document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollPosition / pageHeight) * 100;

    const logoImage = document.getElementById('logo-image');

    // Trigger color change at 10% scroll
    if (scrollPercent >= 2) {
      logoImage.classList.add('scrolled');
    } else {
      logoImage.classList.remove('scrolled');
    }
  });