document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const btn = document.getElementById("guidanceBtn");
const menu = document.getElementById("guidanceMenu");

/* mobile menu */

if(toggle){
toggle.addEventListener("click", function(e){
e.stopPropagation();
nav.classList.toggle("active");
toggle.classList.toggle("active");
});
}

/* dropdown */

if(btn && menu){
btn.addEventListener("click", function(e){
e.preventDefault();
e.stopPropagation();
menu.classList.toggle("show");
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

/* =========================
   TEXTAREA CHARACTER COUNTER
========================= */

const textarea = document.getElementById("caseDescription");
const counter = document.getElementById("charCount");

if(textarea && counter){

textarea.addEventListener("input", function(){
counter.textContent = textarea.value.length;
});

}

});
