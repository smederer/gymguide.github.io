$(document).ready(function () {
  const hamburger = document.querySelector(".Hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const BC = document.querySelector(".wrapperMain");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    BC.classList.toggle("active");
  });
});
