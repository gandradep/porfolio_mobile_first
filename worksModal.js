const worksInfo = {
  title:
  [
    'Keeping track of hundreds of components',
    'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6'
  ],
  tech:
  [
    ['Codkit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    ['css', 'javaScript'], ['Ruby on rails', 'html', 'css'],
    ['css', 'javaScript'],
    ['Ruby on rails', 'html', 'css'], ['css', 'javaScript'],
  ],
  description:
  [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "Lorem Ipsuz is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
  ],
  projectImgMobile:
  [
    'assets/images/p1Mobile.png'
  ],
  projectImgDesktop:
  [

  ],
};

const worksGrid = document.getElementById('worksGrid');

for (let i = 0; i < worksInfo.title.length; i += 1) {
  const article = document.createElement('article');
  article.className = 'workPost borderRad12';
  const divCard = document.createElement('div');
  divCard.className = 'workInfo borderRad12';
  const hgroup = document.createElement('hgroup');
  hgroup.className = 'postColor';

  const title = document.createElement('h2');
  const textTitle = document.createTextNode(worksInfo.title[i]);
  title.className = 'cardTitle';
  title.appendChild(textTitle);

  const techList = document.createElement('ul');
  techList.className = 'postColor';

  const x = worksInfo.tech[i];

  for (let j = 0; j < x.length; j += 1) {
    const li = document.createElement('li');
    li.innerText = x[j];
    techList.appendChild(li);
  }

  const button = document.createElement('a');
  // const buttonText = document.createTextNode('See Project');
  // button.appendChild(buttonText);
  button.innerText = 'See Project';
  button.className = 'button';
  button.href = '#';
  hgroup.appendChild(title);

  divCard.appendChild(hgroup);
  divCard.appendChild(techList);
  divCard.appendChild(button);
  article.appendChild(divCard);
  worksGrid.appendChild(article);
}

/* create modal window */

const modal = document.getElementById('modal');
const buttons = Array.from(document.querySelectorAll('.workPost .button'));
const cardDiv = document.createElement('div');
cardDiv.classList.add('cardDiv');
const cardImgMob = document.createElement('img');
cardImgMob.classList.add('cardImgMob');
const closeModal = document.createElement('i');
closeModal.classList.add('fa-duotone', 'fa-x', 'closeModal');
const modalTitle = document.createElement('h2');
modalTitle.classList.add('modalTitle', 'darkColor');
const modalTechList = document.createElement('ul');
modalTechList.classList.add('postColor');



buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let index = buttons.indexOf(button);
    modal.classList.remove('displayNone');
    modal.classList.add('modalDisplay');
    cardImgMob.src = worksInfo.projectImgMobile[index];
    modalTitle.innerText = worksInfo.title[index];
    for (let j = 0; j <worksInfo.tech[index].length; j += 1) {
      const li = document.createElement('li');
      li.innerText = worksInfo.tech[index][j];
      modalTechList.appendChild(li);
    }
    cardDiv.appendChild(closeModal);
    cardDiv.appendChild(cardImgMob);
    cardDiv.appendChild(modalTitle);
    cardDiv.appendChild(modalTechList);
    modal.appendChild(cardDiv);
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('modalDisplay');
  modal.classList.add('displayNone');
  modalTechList.innerText='';
  modal.innerText='';

});
