function openMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.add("active");
}
function closeMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.remove("active");
}

export function setMenu() {
  // if (bar) {
  const bar = document.getElementById("bar");

  bar.addEventListener("click", openMenu);
  // }
  // if (close) {
  const close = document.getElementById("close");

  close.addEventListener("click", closeMenu);
  // }
}
