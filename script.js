document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

/* MOBILE MENU */

if(toggle){
toggle.addEventListener("click", function(e){
e.stopPropagation();
nav.classList.toggle("active");
toggle.classList.toggle("active");
});
}

/* DROPDOWN (works even if multiple exist) */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function(drop){

const btn = drop.querySelector("a");
const menu = drop.querySelector(".dropdown-menu");

btn.addEventListener("click", function(e){
e.preventDefault();
e.stopPropagation();
menu.classList.toggle("show");
});

menu.addEventListener("click", function(e){
e.stopPropagation();
});

});

/* CLOSE MENUS WHEN CLICKING OUTSIDE */

document.addEventListener("click", function(){

document.querySelectorAll(".dropdown-menu").forEach(function(menu){
menu.classList.remove("show");
});

if(nav){
nav.classList.remove("active");
}

if(toggle){
toggle.classList.remove("active");
}

});

});
const textarea = document.getElementById("caseDescription");
const counter = document.getElementById("charCount");

textarea.addEventListener("input", function() {
    counter.textContent = textarea.value.length;
});
