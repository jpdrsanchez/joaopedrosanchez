const menuMobile = document.querySelector('.menu-mobile');
const menuIcon = document.querySelector('.menu-mobile__icon')
const menu = document.querySelector('.main-menu');
const menuiTem = document.querySelectorAll('.main-menu__link');
const main = document.querySelector('.main');
const header = document.querySelector('.header');

function abrirMenu() {
  menu.classList.toggle('main-menu--active');
  menuIcon.classList.toggle('menu-mobile__icon--active');
}

function fecharMenu() {
  menu.classList.remove('main-menu--active');
  menuIcon.classList.remove('menu-mobile__icon--active');
}

function menuScroll() {
  if (window.innerWidth > 580) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    }
  } else {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    }
  }
}

menuMobile.addEventListener('click', abrirMenu);

menuiTem.forEach(function(item) {
  item.addEventListener('click', fecharMenu);
});

document.addEventListener('scroll', menuScroll);