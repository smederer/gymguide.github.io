$(document).ready(function () {
  const hamburger = document.querySelector(".Hamburger");
  const navMenu = document.querySelector(".nav-menu");
  //const BC = document.querySelector(".blackbackground");
  const headerChange = document.querySelector(".LogoFont");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    //BC.classList.toggle("active");
    headerChange.classList.toggle("active");
  });
});
