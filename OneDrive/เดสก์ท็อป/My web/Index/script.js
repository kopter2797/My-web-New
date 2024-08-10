document.addEventListener("DOMContentLoaded", function() {
    // Banner slider
    const slides = document.querySelectorAll(".banner-slider img");
    const totalSlides = slides.length;
    let currentSlide = 0;

    function showSlide(index) {
        const offset = -index * 100;
        document.querySelector(".banner-slider").style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    document.getElementById("nextBtn").addEventListener("click", nextSlide);
    document.getElementById("prevBtn").addEventListener("click", prevSlide);

    // Product details
    document.querySelectorAll(".show-details-btn").forEach(button => {
        button.addEventListener("click", function() {
            this.nextElementSibling.style.display = "flex";
        });
    });

    document.querySelectorAll(".close-details-btn").forEach(button => {
        button.addEventListener("click", function() {
            this.parentElement.style.display = "none";
        });
    });

    // Modal welcome message
    const welcomeBtn = document.getElementById("welcome-btn");
    const welcomeModal = document.getElementById("welcome-modal");
    const closeModalBtn = document.getElementById("close-modal");

    welcomeBtn.addEventListener("click", function() {
        welcomeModal.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", function() {
        welcomeModal.style.display = "none";
    });
});
