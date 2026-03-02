document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const btn = document.getElementById("guidanceBtn");
const menu = document.querySelector(".dropdown-menu");

/* mobile menu toggle */

toggle.addEventListener("click", function(e){
e.stopPropagation();
nav.classList.toggle("active");
});

/* dropdown toggle */

btn.addEventListener("click", function(e){
e.preventDefault();
e.stopPropagation();
menu.classList.toggle("show");
});

/* close menu when touching background */

document.addEventListener("click", function(e){

if(!nav.contains(e.target) && !toggle.contains(e.target)){
nav.classList.remove("active");
}

if(!btn.contains(e.target) && !menu.contains(e.target)){
menu.classList.remove("show");
}

});

/* close dropdown on scroll */

window.addEventListener("scroll", function(){
menu.classList.remove("show");
});

});
