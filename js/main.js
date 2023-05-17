// menuBurger

document.addEventListener('DOMContentLoaded', function() {
    let menuBtn = document.querySelector('.burger__menu');
    let nav = document.querySelector('.header__nav');
    let body = document.body

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        body.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
});

