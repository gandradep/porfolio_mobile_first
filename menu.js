let hamburgerSymbol = document.getElementById('hamburgerSymbol');
let popUpMenuMobile = document.getElementById('popUpMenuMobile');
let closeMenuSymbol = document.getElementById('closeMenuSymbol');
let menuListItems = Array.from(document.querySelectorAll('ul .navBarColor'));

console.log(menuListItems);

function openMenu(){
  popUpMenuMobile.classList.add('showMenu');
}

function closeMenu(){
  popUpMenuMobile.classList.remove('showMenu');
}


hamburgerSymbol.addEventListener('click', openMenu);
closeMenuSymbol.addEventListener('click', closeMenu);


menuListItems.forEach(element => {
  element.addEventListener('click', closeMenu);
  
});
