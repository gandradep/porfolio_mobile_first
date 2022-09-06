const worksInfo = {
  title: ['Keeping track of hundreds of components',
    'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6'],
  tech:
  [
    ['Codkit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    ['css', 'javaScript'], ['Ruby on rails', 'html', 'css'],
    ['css', 'javaScript'],
    ['Ruby on rails', 'html', 'css'], ['css', 'javaScript'],
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
  const buttonText = document.createTextNode('See Project');
  button.appendChild(buttonText);
  button.className = 'button';
  hgroup.appendChild(title);

  divCard.appendChild(hgroup);
  divCard.appendChild(techList);
  divCard.appendChild(button);
  article.appendChild(divCard);
  worksGrid.appendChild(article);
}
