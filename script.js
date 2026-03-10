document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const btn = document.getElementById("guidanceBtn");
const menu = document.querySelector(".dropdown-menu");

/* mobile menu */

if(toggle){
toggle.addEventListener("click", function(e){
e.stopPropagation();

nav.classList.toggle("active");

/* THIS LINE makes hamburger turn into X */
toggle.classList.toggle("active");

});
}

/* dropdown toggle */

if(btn){
btn.addEventListener("click", function(e){
e.preventDefault();
e.stopPropagation();
menu.classList.toggle("show");
});
}

/* clicking inside dropdown should NOT close it */

if(menu){
menu.addEventListener("click", function(e){
e.stopPropagation();
});
}

/* close when clicking outside */

document.addEventListener("click", function(e){

if(btn && menu && !btn.contains(e.target) && !menu.contains(e.target)){
menu.classList.remove("show");
}

if(nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)){
nav.classList.remove("active");
toggle.classList.remove("active"); /* also reset hamburger */
}

});

});
