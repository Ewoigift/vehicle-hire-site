let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-bars');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".vehicle-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,

        },
        991: {
            slidesPerView: 3,
        },
    },
});