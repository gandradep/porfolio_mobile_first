const hamburgerSymbol = document.getElementById('hamburgerSymbol');
const popUpMenuMobile = document.getElementById('popUpMenuMobile');
const closeMenuSymbol = document.getElementById('closeMenuSymbol');
const body = document.querySelector('body');
const menuListItems = Array.from(document.querySelectorAll('ul .navBarColor'));

function openMenu() {
  popUpMenuMobile.classList.add('showMenu');
  body.style.overflow = 'hidden';
}

function closeMenu() {
  popUpMenuMobile.classList.remove('showMenu');
  body.style.overflow = 'auto';
}

hamburgerSymbol.addEventListener('click', openMenu);
closeMenuSymbol.addEventListener('click', closeMenu);

menuListItems.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});
