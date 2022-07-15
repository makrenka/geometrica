const humburger = document.querySelector('.header_humburger');
const mobileMenu = document.querySelector('.header__mobile-menu');
const overlay = document.querySelector('.overlay');

function openMenu() {
    mobileMenu.classList.toggle(`header__mobile-menu--active`);
    overlay.classList.toggle(`overlay--active`);
}

humburger.addEventListener('click', openMenu);
overlay.addEventListener('click', openMenu);