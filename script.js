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
