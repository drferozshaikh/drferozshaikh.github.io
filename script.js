document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const btn = document.getElementById("guidanceBtn");
const menu = document.querySelector(".dropdown-menu");

toggle.addEventListener("click",function(){
nav.classList.toggle("active");
});

btn.addEventListener("click",function(e){
e.preventDefault();
menu.classList.toggle("show");
});

document.addEventListener("click",function(e){

if(!btn.contains(e.target) && !menu.contains(e.target)){
menu.classList.remove("show");
}

});

});
