/* Burger Menu */
const burgerIcon = document.querySelector('.nav__menu-icon');
const navMenu = document.querySelector('.nav__main');

const toggleBurgerMenu = () => {
  window.scrollTo(0, 0);
  document.body.classList.toggle('no-scroll');
  burgerIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
};

burgerIcon.addEventListener('click', toggleBurgerMenu);
navMenu.addEventListener('click', toggleBurgerMenu);

document.body.addEventListener('click', (e) => {
  if (!e.target.closest('.nav__header') && navMenu.classList.includes('active')) {
    document.body.classList.remove('no-scroll');
    burgerIcon.classList.remove('active');
    navMenu.classList.remove('active');
  }
});
