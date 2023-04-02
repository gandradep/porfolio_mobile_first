const worksInfo = {
  title:
  [
    'Budget App', 'Famous Quotes', 'To Do List', 'Math magicians', 'Conference Page', 'Portfolio Mobile First',
  ],
  tech:
  [
    ['Ruby', 'Rails', 'Postgres'], ['React', 'Redux', 'CSS3'],
    ['JavaScript', 'CSS3', 'Html'],
    ['React', 'Html', 'CSS3'], ['Html', 'GitHub', 'JavaScript', 'CSS3'], ['Html', 'CSS3', 'JavaScript'],
  ],
  description:
  [

    'This app made with Ruby on rails and devise, help us keep track of our expenses. You are able to create categories and add expenses to one or several categories you created.',
    'Famous quotes is an app that shows famous quotes said by different persons in the last century. The quotes are fetched from a public API.',
    'This project is a To Do List. Built using webpack, HTML, CSS, JavaScript. The user can create, erase, and update tasks. Also, the user can mark completed tasks.',
    'This project is a calculator made using React and ReactRouters for the navbar links.',
    'Conference page mockup for the Processing Community Day.The page is responsive for mobile and desktop screens.',
    'This portfolio project gathers and shows data dynamically from an object. The responsive design of the project has a mobile first approach.',
  ],
  projectImgMobile:
  [
    'assets/images/projects/budgetMobile.png',
    'assets/images/projects/quotesMobile.png',
    'assets/images/projects/todolistMobile.png',
    'assets/images/projects/mathMobile.png',
    'assets/images/projects/conferenceMobile.png',
    'assets/images/projects/portfolioMobile.png',
  ],
  projectImgDesktop:
  [
    'assets/images/projects/budgetDesktop.png',
    'assets/images/projects/quotesDesktop.png',
    'assets/images/projects/todolistDesktop.png',
    'assets/images/projects/mathDesktop.png',
    'assets/images/projects/conferenceDesktop.png',
    'assets/images/projects/portfolioDesktop.png',

  ],
  linkLive:
  [
    '#https://budget-app-bdu6.onrender.com',
    'https://profound-biscochitos-b105fe.netlify.app/',
    'https://gandradep.github.io/toDoList/dist/',
    'https://fanciful-moxie-2b27f1.netlify.app/',
    'https://gandradep.github.io/conferencePage/index.html',
    'https://gandradep.github.io/porfolio_mobile_first/',
  ],
  linkSource:
  [
    'https://github.com/gandradep/budget_app',
    'https://github.com/gandradep/famousQuotes',
    'https://github.com/gandradep/toDoList',
    'https://github.com/gandradep/math_magicians',
    'https://github.com/gandradep/conferencePage',
    'https://github.com/gandradep/porfolio_mobile_first',
  ],
};

const worksGrid = document.getElementById('worksGrid');

for (let i = 0; i < worksInfo.title.length; i += 1) {
  const article = document.createElement('article');
  article.className = 'workPost borderRad12 d-flex';
  article.style.cssText += `background-image:url(${worksInfo.projectImgMobile[i]});background-size:cover`;
  const divCard = document.createElement('div');
  divCard.className = 'workInfo borderRad12 d-flex';
  const hgroup = document.createElement('hgroup');
  hgroup.className = 'postColor';

  const title = document.createElement('h2');
  const textTitle = document.createTextNode(worksInfo.title[i]);
  title.className = 'cardTitle';
  title.appendChild(textTitle);

  const techList = document.createElement('ul');
  techList.className = 'postColor d-flex p-0';

  const x = worksInfo.tech[i];

  for (let j = 0; j < x.length; j += 1) {
    const li = document.createElement('li');
    li.innerText = x[j];
    techList.appendChild(li);
  }

  const button = document.createElement('a');
  button.innerText = 'See Project';
  button.className = 'button';
  // button.href = '#';
  hgroup.appendChild(title);
  divCard.appendChild(hgroup);
  divCard.appendChild(techList);
  divCard.appendChild(button);
  article.append(divCard);
  worksGrid.appendChild(article);
}

/* create modal window */
const body = document.querySelector('body');
const modal = document.getElementById('modal');
const buttons = Array.from(document.querySelectorAll('.workPost .button'));
const cardDiv = document.createElement('div');
cardDiv.classList.add('cardDiv', 'd-flex');
const cardImgMob = document.createElement('img');
cardImgMob.classList.add('width90', 'displayMobile');
const cardImgDesk = document.createElement('img');
cardImgDesk.classList.add('cardImgDesk', 'displayDesktop');
const closeModal = document.createElement('i');
closeModal.classList.add('fa-duotone', 'fa-x', 'closeModal');
const modalTitleMob = document.createElement('h2');
modalTitleMob.classList.add('modalTitle', 'darkColor', 'displayMobile');
const modalTitleDesk = document.createElement('h2');
modalTitleDesk.classList.add('modalTitle', 'darkColor', 'displayDesktop');
const modalTechList = document.createElement('ul');
modalTechList.classList.add('postColor', 'width90', 'd-flex');
const projectDescription = document.createElement('p');
projectDescription.classList.add('projectCardDescription', 'width90');
const divButtons = document.createElement('div');
divButtons.classList.add('divButtons', 'displayMobile', 'd-flex');
const buttonLive = document.createElement('a');
buttonLive.classList.add('button', 'alignButton', 'd-flex');
buttonLive.target = '_blank';
const liveText = document.createElement('span');
liveText.innerText = 'See Live  ';
const buttonSource = document.createElement('a');
buttonSource.classList.add('button', 'alignButton', 'd-flex');
buttonSource.target = '_blank';
const sourceText = document.createElement('span');
sourceText.innerText = 'See Source ';
const liveImg = document.createElement('img');
liveImg.src = 'assets/images/liveIcon.png';
const sourceImg = document.createElement('img');
sourceImg.src = 'assets/images/sourceIcon.png';
const divTitleAndButton = document.createElement('div');
divTitleAndButton.classList.add('displayDesktop', 'divTextButton');
const divButtonsDesktop = document.createElement('div');
divButtonsDesktop.classList.add('divButtons', 'd-flex');
buttonLive.append(liveText, liveImg);
buttonSource.append(sourceText, sourceImg);
divButtons.append(buttonLive, buttonSource);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const index = buttons.indexOf(button);
    let numTech = 3;
    modal.classList.remove('displayNone');
    modal.classList.add('modalDisplay');
    cardImgMob.src = worksInfo.projectImgMobile[index];
    cardImgDesk.src = worksInfo.projectImgDesktop[index];
    modalTitleMob.innerText = worksInfo.title[index];
    modalTitleDesk.innerText = worksInfo.title[index];
    projectDescription.innerText = worksInfo.description[index];
    buttonLive.href = worksInfo.linkLive[index];
    buttonSource.href = worksInfo.linkSource[index];
    divButtonsDesktop.append(buttonLive.cloneNode(true), buttonSource.cloneNode(true));
    body.style.overflow = 'hidden';

    /* only displays 3 use technologies for mobile screen */

    numTech = worksInfo.tech[index].length;

    for (let j = 0; j < numTech; j += 1) {
      const li = document.createElement('li');
      li.innerText = worksInfo.tech[index][j];
      li.classList.add('singleTechCard');
      modalTechList.appendChild(li);
    }
    divTitleAndButton.append(modalTitleDesk, divButtonsDesktop);
    cardDiv.append(
      closeModal, cardImgDesk, cardImgMob, divTitleAndButton, modalTitleMob,
      modalTechList, projectDescription, divButtons,
    );
    modal.appendChild(cardDiv);
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('modalDisplay');
  modal.classList.add('displayNone');

  modalTechList.innerText = '';
  modal.innerText = '';
  divButtonsDesktop.innerText = '';
  body.style.overflow = 'auto';
});
