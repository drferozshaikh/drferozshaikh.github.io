document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("guidanceBtn");
  const menu = document.querySelector(".dropdown-menu");

  if (!btn || !menu) return;

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle("show");
  });

  // close if clicking outside
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove("show");
    }
  });

});
