
var swiper = new Swiper('#swiperx', {
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
        init(swiper) {
            // Display the description for the initial slide
            const activeSlide = swiper.slides[swiper.realIndex];
            const descriptionId = activeSlide.getAttribute('data-description-id');

            const activeDescription = document.getElementById(descriptionId);
            if (activeDescription) {
                activeDescription.classList.add('active');
            }
        },
        slideChange(swiper) {
            const activeSlide = swiper.slides[swiper.realIndex];
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
swiper.emit('init');



























