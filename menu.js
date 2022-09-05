let hamburgerSymbol = document.getElementById('hamburgerSymbol');
let popUpMenuMobile = document.getElementById('popUpMenuMobile');
function openMenu(){
  popUpMenuMobile.classList.add('showMenu');
  console.log('test');

}

hamburgerSymbol.addEventListener('click', openMenu);
