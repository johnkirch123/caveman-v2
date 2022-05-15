const minted = '../data/web-minted.json';

const searchCaveman = document.getElementById('search_cavemen');
const mainElement = document.querySelector('.cavemen__body');

let result;
let cavemen;
let div;
let side1;
let side2;
let image;
let anchor;

console.log('window in cavemen.js');

fetch(minted)
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => {
      return a.attributes[1]['rarity-rank'] - b.attributes[1]['rarity-rank'];
    });

    console.log(minted);
    cavemen = data;
    displayData(cavemen);
  });

searchCaveman.addEventListener('keyup', (e) => {
  // Get input text
  const cavemenText = e.target.value;

  if (cavemenText !== '') {
    result = cavemen.filter((caveman, i) => {
      const { name } = caveman;
      const rarityType = caveman.attributes[0]['rarity-type'];
      const rarityRank = caveman.attributes[1]['rarity-rank'].toString();
      const background = caveman.attributes[2]['background'];
      const body = caveman.attributes[3]['body'];
      const feet = caveman.attributes[4]['feet'];
      const clothing = caveman.attributes[5]['clothing'];
      const hair = caveman.attributes[6]['hair'];
      const arms = caveman.attributes[7]['arms'];
      const environment = caveman.attributes[8]['environment'];
      const head = caveman.attributes[9]['head'];

      return (
        name.indexOf(cavemenText) !== -1 ||
        rarityRank.indexOf(cavemenText) !== -1 ||
        rarityType.indexOf(cavemenText) !== -1 ||
        background.indexOf(cavemenText) !== -1 ||
        body.indexOf(cavemenText) !== -1 ||
        feet.indexOf(cavemenText) !== -1 ||
        clothing.indexOf(cavemenText) !== -1 ||
        hair.indexOf(cavemenText) !== -1 ||
        arms.indexOf(cavemenText) !== -1 ||
        environment.indexOf(cavemenText) !== -1 ||
        head.indexOf(cavemenText) !== -1
      );
    });
    displayData(result);
  } else {
    displayData(cavemen);
  }
});

const displayData = (_data) => {
  mainElement.innerHTML = '';
  for (let i = 0; i < _data.length; i++) {
    image = document.createElement('img');
    div = document.createElement('div');
    side1 = document.createElement('div');
    side2 = document.createElement('div');
    anchor = document.createElement('a');

    image.src = `https://caveman-images.s3.us-west-1.amazonaws.com/${_data[i].caveman}.jpg`;
    image.alt = 'Caveman Image';

    image.classList.add('card__img');
    div.classList.add('cavemen__item', 'card');
    anchor.classList.add('card__link');
    anchor.href = `https://caveman-images.s3.us-west-1.amazonaws.com/${_data[i].caveman}.jpg`;
    anchor.target = '_blank';

    side1.appendChild(image);
    side1.appendChild(frontOfCard(_data[i]));
    side2.appendChild(backOfCard(_data[i]));
    side1.classList.add('card__side', 'card__side--front');
    side2.classList.add('card__side', 'card__side--back');
    div.appendChild(side1);
    div.appendChild(side2);

    anchor.appendChild(div);
    mainElement.append(anchor);
  }
};

const frontOfCard = (element) => {
  let div = document.createElement('div');
  div.classList.add('card__number');

  div.innerHTML += `<h3 class="card__header">Caveman #</h3>
                        <p class="card__number--num">${JSON.stringify(
                          element.caveman
                        )}</p>
                        <span class="card__number--rank">${JSON.stringify(
                          element.attributes[1]
                        )}</span>
                    `;

  return div;
};

const backOfCard = (element) => {
  const { attributes } = element;

  let div = document.createElement('div');
  div.classList.add('card__attribute');

  for (let i = 0; i < attributes.length - 2; i++) {
    let obj = attributes[i + 2];

    for (const [key, value] of Object.entries(obj)) {
      div.innerHTML += `<h3 class="card__header">${JSON.stringify(
        key
      )}</h3><p class="card__details">${JSON.stringify(value)}</p>`;
    }
  }
  return div;
};
