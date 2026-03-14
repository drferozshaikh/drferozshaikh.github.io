document.addEventListener("DOMContentLoaded", function () {

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const guidanceBtn = document.getElementById("guidanceBtn");
const guidanceMenu = document.getElementById("guidanceMenu");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

guidanceBtn.addEventListener("click", function(e) {
    e.preventDefault();
    guidanceMenu.classList.toggle("show");
});

});

/* mobile menu */

if(toggle){
toggle.addEventListener("click", function(e){
e.stopPropagation();
nav.classList.toggle("active");
toggle.classList.toggle("active");
});
}

/* dropdown */

if(btn){
btn.addEventListener("click", function(e){
e.preventDefault();
e.stopPropagation();

if(menu){
menu.classList.toggle("show");
}
});
}

/* stop closing when clicking inside dropdown */

if(menu){
menu.addEventListener("click", function(e){
e.stopPropagation();
});
}

/* close menus when clicking outside */

document.addEventListener("click", function(){

if(menu){
menu.classList.remove("show");
}

if(nav){
nav.classList.remove("active");
}

if(toggle){
toggle.classList.remove("active");
}

});

});
