
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.diapositiva');
    const prevButton = document.querySelector('.anterior');
    const nextButton = document.querySelector('.siguiente');
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Cambio automático de diapositivas cada 5 segundos
    setInterval(nextSlide, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navSocial = document.querySelector('.nav__social');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navSocial.classList.toggle('active');
    });
});