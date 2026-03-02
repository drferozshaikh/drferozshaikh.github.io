document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("guidanceBtn");
  const menu = document.querySelector(".dropdown-menu");
  const nav = document.getElementById("mainNav");

  if (!btn || !menu) return;

  /* Toggle guidance dropdown */

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle("show");
  });


  /* Close dropdown when clicking outside */

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove("show");
    }
  });


  /* Close dropdown after selecting item */

  const dropdownLinks = menu.querySelectorAll("a");

  dropdownLinks.forEach(link => {
    link.addEventListener("click", function () {
      menu.classList.remove("show");
    });
  });


  /* Close mobile menu after clicking link */

  const navLinks = nav.querySelectorAll("a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      nav.classList.remove("show");
    });
  });

});


/* Mobile menu toggle */

function toggleMenu() {

  const nav = document.getElementById("mainNav");

  if (nav) {
    nav.classList.toggle("show");
  }

}
