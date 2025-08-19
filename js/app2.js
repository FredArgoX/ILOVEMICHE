
var swiper2 = new Swiper('#swiperx2', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 0,
    speed: 600,
    preventClicks: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    on: {
        init(swiper2) {
            // Display the description for the initial slide
            const activeSlide = swiper2.slides[swiper2.realIndex];
            const descriptionId = activeSlide.getAttribute('data-description-id');

            const activeDescription = document.getElementById(descriptionId);
            if (activeDescription) {
                activeDescription.classList.add('active');
            }
        },
        slideChange(swiper2) {
            const activeSlide = swiper2.slides[swiper.realIndex];
            const descriptionId = activeSlide.getAttribute('data-description-id');

            // Hide all descriptions
            const descriptions = document.querySelectorAll('.description');
            descriptions.forEach(desc => desc.classList.remove('active'));

            // Show the current description
            const activeDescription = document.getElementById(descriptionId);
            if (activeDescription) {
                activeDescription.classList.add('active');
            }
        }
    }
});

// Manually trigger the `init` event to ensure it runs on page load
swiper2.emit('init');



























