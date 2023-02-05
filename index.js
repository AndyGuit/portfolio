/* Burger Menu */
const burgerIcon = document.querySelector('.nav__menu-icon');
const navMenu = document.querySelector('.nav__main');
const navLink = document.querySelector('.nav__link');

const toggleBurgerMenu = () => {
  burgerIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
};

burgerIcon.addEventListener('click', toggleBurgerMenu);
navLink.addEventListener('click', toggleBurgerMenu);
