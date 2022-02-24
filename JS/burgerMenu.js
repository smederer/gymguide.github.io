$(document).ready(function () {
  const hamburger = document.querySelector(".Hamburger");
  const navMenu = document.querySelector(".nav-menu");
  //const BC = document.querySelector(".blackbackground");
  const headerChange = document.querySelector(".LogoFont");
  const lineOpacity = document.getElementsByClassName("line");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    //BC.classList.toggle("active");
    headerChange.classList.toggle("active");

    for (let i = 0; i < lineOpacity.length; i++) {
      lineOpacity[i].classList.toggle("active");
    }
  });
});
