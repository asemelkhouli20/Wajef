export function initLazyLoadingFunc() {
  const lazyBackgrounds = document.querySelectorAll(".lazy-background");

  const loadBackgroundImage = (el) =>
    (el.style.backgroundImage = `url(${el.dataset.bg})`);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadBackgroundImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
    lazyBackgrounds.forEach((el) => observer.observe(el));
  } else {
    lazyBackgrounds.forEach(loadBackgroundImage);
  }
}
