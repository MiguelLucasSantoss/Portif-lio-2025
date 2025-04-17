document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active');
            item.style.opacity = '0.5';
            item.style.transform = 'scale(0.8)';

            if (index === currentIndex) {
                item.classList.add('active');
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            } else if ((index + 1) % items.length === currentIndex) {
                item.style.transform = 'translateX(-100%) scale(0.8)';
            } else if ((index - 1 + items.length) % items.length === currentIndex) {
                item.style.transform = 'translateX(100%) scale(0.8)';
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    updateCarousel();
});
