// ===============================
// Namaskar Dresses V3
// script.js (Part 1)
// ===============================

let cartCount = 0;
let wishlistCount = 0;

const cartCounter = document.getElementById("cart-count");
const wishlistCounter = document.getElementById("wishlist-count");

const toast = document.getElementById("toast");

// Toast Message
function showToast(message){

toast.innerHTML = message;

toast.classList.add("show");

setTimeout(function(){

toast.classList.remove("show");

},2000);

}

// ===============================
// ADD TO CART
// ===============================

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(function(button){

button.addEventListener("click",function(){

cartCount++;

cartCounter.innerHTML = cartCount;

showToast("🛒 Product Added To Cart");

});

});


// ===============================
// WISHLIST
// ===============================

const wishlistButtons =
document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(function(button){

button.addEventListener("click",function(){

if(button.classList.contains("active")){

button.classList.remove("active");

button.innerHTML =
'<i class="fa-regular fa-heart"></i>';

wishlistCount--;

}else{

button.classList.add("active");

button.innerHTML =
'<i class="fa-solid fa-heart"></i>';

wishlistCount++;

}

if(wishlistCount < 0){

wishlistCount = 0;

}

wishlistCounter.innerHTML = wishlistCount;

});

});


// ===============================
// IMAGE SLIDER
// ===============================

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;
// ===============================
// AUTO SLIDER
// ===============================

function showSlide(index){

slides.forEach(function(slide){

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

}

setInterval(nextSlide,3000);


// ===============================
// SEARCH
// ===============================

const searchInput =
document.querySelector(".search-box input");

searchInput.addEventListener("keyup",function(){

let value =
searchInput.value.toLowerCase();

const cards =
document.querySelectorAll(".product-card");

cards.forEach(function(card){

let text =
card.innerText.toLowerCase();

if(text.indexOf(value)>-1){

card.style.display="block";

}else{

card.style.display="none";

}

});

});


// ===============================
// MENU BUTTON
// ===============================

const menuButton =
document.querySelector(".menu-btn");


// ===============================
// MAP BUTTON
// ===============================

const mapButton =
document.querySelector(".map-btn");

if(mapButton){

mapButton.addEventListener("click",function(e){

e.preventDefault();

window.open(
"https://maps.google.com",
"_blank"
);

});

}
// ===============================
// SMOOTH SCROLL
// ===============================

const footerLinks =
document.querySelectorAll(".footer-links a");

footerLinks.forEach(function(link){

link.addEventListener("click",function(e){

e.preventDefault();

const text =
this.innerText.toLowerCase();

if(text==="home"){

window.scrollTo({
top:0,
behavior:"smooth"
});

}

});

});


// ===============================
// PAGE LOADED
// ===============================

window.addEventListener("load",function(){

showSlide(currentSlide);

showToast("👋 Welcome to Namaskar Dresses");

});


// ===============================
// OPTIONAL FUTURE FEATURES
// ===============================

// Local Storage
// Login System
// Checkout
// Payment Gateway
// Order Tracking
// Wishlist Sync
// Admin Panel
// Product Filter
// Dark Mode


console.log
// ======================
// PREMIUM SIDE MENU
// ======================

const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");

menuButton.removeEventListener("click", function(){});

menuButton.onclick = function(){

sideMenu.classList.add("active");
menuOverlay.classList.add("active");

};

function closeDrawer(){

sideMenu.classList.remove("active");
menuOverlay.classList.remove("active");

}

closeMenu.onclick = closeDrawer;
menuOverlay.onclick = closeDrawer;
