document.addEventListener("DOMContentLoaded", function() {

const btn = document.getElementById("guidanceBtn");
const menu = document.querySelector(".dropdown-menu");

btn.addEventListener("click", function(e){
e.preventDefault();
menu.classList.toggle("show");
});

/* close when clicking outside */

document.addEventListener("click", function(e){
if (!btn.contains(e.target) && !menu.contains(e.target)){
menu.classList.remove("show");
}
});

});
<script>

function toggleMenu(){
document.querySelector(".main-nav").classList.toggle("active");
}

</script>
