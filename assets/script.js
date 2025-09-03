const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});

const slides = document.querySelectorAll('.swiper-slide');
const pagination = document.querySelector('.swiper-pagination');

slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        pagination.style.opacity = '0'; // Oculta las bullets
        pagination.style.transition = 'opacity 0.3s ease'; // Transición suave
    });
    slide.addEventListener('mouseout', () => {
        pagination.style.opacity = '1'; // Muestra las bullets
    });
});

// Busca los botones por su ID
const whatsappBtn = document.getElementById('whatsappBtn');
const locationBtn = document.getElementById('locationBtn');

// Asigna el enlace de WhatsApp usando la variable de data.js
if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/${WSP_NUMERO}`;
}

// Asigna el enlace de ubicación usando la variable de data.js
if (locationBtn) {
    locationBtn.href = UBICACION_LINK;
}