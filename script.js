// Animation styles
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('div, img, p');
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('fadeInZoom');
    }, index * 100);  // delay each element slightly
  });
});
