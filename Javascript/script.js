// script.js

// Banner Slider
let currentIndex = 0;
const slides = document.querySelectorAll(".banner-slider img");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Initialize the first slide
showSlide(currentIndex);

document.getElementById("nextBtn")?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
});

document.getElementById("prevBtn")?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
});

// Product Details Functionality
document.querySelectorAll(".show-details-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const productDetails = btn
      .closest(".product-item")
      .querySelector(".product-details");
    if (productDetails) {
      productDetails.style.display = "block";
      productDetails.style.position = "fixed";
      productDetails.style.top = "50%";
      productDetails.style.left = "50%";
      productDetails.style.transform = "translate(-50%, -50%)";
      productDetails.style.zIndex = "1000";
    }
  });
});

document.querySelectorAll(".close-details-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".product-details").style.display = "none";
  });
});

// Close details view when clicking outside of it
window.addEventListener("click", (e) => {
  if (e.target.matches(".product-details")) {
    e.target.style.display = "none";
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn = document.querySelector(".close-sidebar-btn");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
