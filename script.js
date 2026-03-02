document.addEventListener("DOMContentLoaded", function() {

const btn = document.getElementById("guidanceBtn");
const menu = document.querySelector(".dropdown-menu");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

/* mobile menu toggle */

if(menuToggle){
menuToggle.addEventListener("click", function(e){
e.stopPropagation();
nav.classList.toggle("active");
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

/* close dropdown if clicking elsewhere */

document.addEventListener("click", function(e){

if(menu && btn){
if(!btn.contains(e.target) && !menu.contains(e.target)){
menu.classList.remove("show");
}
}

if(nav && menuToggle){
if(!nav.contains(e.target) && !menuToggle.contains(e.target)){
nav.classList.remove("active");
}

}

});

/* close dropdown when scrolling */

window.addEventListener("scroll", function(){
if(menu){
menu.classList.remove("show");
}
});

});
