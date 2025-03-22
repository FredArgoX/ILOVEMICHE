document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        updateSlides();
    }

    function setSlide(index) {
        currentSlide = parseInt(index);
        updateSlides();
    }

    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));
    dots.forEach(dot => dot.addEventListener('click', event => setSlide(event.target.dataset.index)));

    updateSlides(); // Ensure the first slide is correctly displayed
});
