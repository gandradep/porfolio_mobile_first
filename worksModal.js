const worksInfo = {
  title:
  [
    'Conference Page',
    'Budget App', 'Project 3', 'Project 4', 'Project 5', 'Project 6',
  ],
  tech:
  [
    ['Html', 'GitHub', 'JavaScript', 'css'],
    ['Ruby', 'Rails', 'Postgres'], ['Ruby on rails', 'html', 'css'],
    ['css', 'javaScript'],
    ['Ruby on rails', 'html', 'css'], ['css', 'javaScript'],
  ],
  description:
  [
    "Conference page mockup for the Processing Community Day.The page is responsive for mobile and desktop screens.",
    "This app made with Ruby on rails and devise, help us keep track of our expenses. You are able to create categories and add expenses to one or several categories you created.",
    "Project3 text Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    "Project4 text Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    "Project5 text Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    "Project6 text Ipsuz is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  ],
  projectImgMobile:
  [
    'assets/images/conferenceMobile.png',
    'assets/images/budgetMobile.png',
    'assets/images/p1Mobile.png',
    'assets/images/p2Mobile.png',
    'assets/images/p1Mobile.png',
    'assets/images/p2Mobile.png',
  ],
  projectImgDesktop:
  [
    'assets/images/conferenceDesktop.png',
    'assets/images/budgetDesktop.png',
    'assets/images/p1Desktop.png',
    'assets/images/p2Desktop.png',
    'assets/images/p1Desktop.png',
    'assets/images/p2Desktop.png',

  ],
  linkLive:
  [
    'https://gandradep.github.io/conferencePage/index.html',
    '#https://budget-app-bdu6.onrender.com',
    'https://gandradep.github.io/setupPortfolioMobileFirst/',
    'https://gandradep.github.io/setupPortfolioMobileFirst/',
    'https://gandradep.github.io/setupPortfolioMobileFirst/',
    'https://gandradep.github.io/setupPortfolioMobileFirst/',
  ],
  linkSource:
  [
    'https://github.com/gandradep/conferencePage',
    'https://github.com/gandradep/budget_app',
    'https://github.com/gandradep/setupPortfolioMobileFirst',
    'https://github.com/gandradep/setupPortfolioMobileFirst',
    'https://github.com/gandradep/setupPortfolioMobileFirst',
    'https://github.com/gandradep/setupPortfolioMobileFirst',
  ],
};

const worksGrid = document.getElementById('worksGrid');

for (let i = 0; i < worksInfo.title.length; i += 1) {
  const article = document.createElement('article');
  article.className = 'workPost borderRad12 dFlex';
  const divCard = document.createElement('div');
  divCard.className = 'workInfo borderRad12 dFlex';
  const hgroup = document.createElement('hgroup');
  hgroup.className = 'postColor';

  const title = document.createElement('h2');
  const textTitle = document.createTextNode(worksInfo.title[i]);
  title.className = 'cardTitle';
  title.appendChild(textTitle);

  const techList = document.createElement('ul');
  techList.className = 'postColor dFlex';

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
  article.appendChild(divCard);
  worksGrid.appendChild(article);
}

/* create modal window */
const body = document.querySelector("body");
const modal = document.getElementById('modal');
const buttons = Array.from(document.querySelectorAll('.workPost .button'));
const cardDiv = document.createElement('div');
cardDiv.classList.add('cardDiv', 'dFlex');
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
modalTechList.classList.add('postColor', 'width90', 'dFlex');
const projectDescription = document.createElement('p');
projectDescription.classList.add('projectCardDescription', 'width90');
const divButtons = document.createElement('div');
divButtons.classList.add('divButtons', 'displayMobile', 'dFlex');
const buttonLive = document.createElement('a');
buttonLive.classList.add('button', 'alignButton', 'dFlex');
buttonLive.target = '_blank';
const liveText = document.createElement('span');
liveText.innerText = 'See Live  ';
const buttonSource = document.createElement('a');
buttonSource.classList.add('button', 'alignButton', 'dFlex');
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
divButtonsDesktop.classList.add('divButtons', 'dFlex');
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
    body.style.overflow = "hidden";

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
  body.style.overflow = "auto";
});
