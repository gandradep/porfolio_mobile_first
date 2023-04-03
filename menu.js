const hamburgerSymbol = document.getElementById('hamburgerSymbol');
const popUpMenuMobile = document.getElementById('popUpMenuMobile');
const closeMenuSymbol = document.getElementById('closeMenuSymbol');
const menuListItems = Array.from(document.querySelectorAll('ul .navBarColor'));

function openMenu() {
  popUpMenuMobile.classList.add('showMenu');  
}

function closeMenu() {
  popUpMenuMobile.classList.remove('showMenu');  
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
