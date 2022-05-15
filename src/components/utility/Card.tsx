import React from 'react';

interface IProps {
  caveman: {
    name: string;
    caveman: number;
    attributes: [
      {
        'rarity-type': string;
      },
      {
        'rarity-rank'?: undefined;
      },
      {
        background?: undefined;
      },
      {
        body?: undefined;
      },
      {
        feet?: undefined;
      },
      {
        clothing?: undefined;
      },
      {
        hair?: undefined;
      },
      {
        arms?: undefined;
      },
      {
        environment?: undefined;
      },
      {
        head?: undefined;
      }
    ];
    minted?: boolean;
  };
}

const Card = ({ caveman }: IProps) => {
  // const frontOfCard = () => {
  //   const div = document.createElement('div');
  //   div.classList.add('card__number');

  //   div.innerHTML += `<h3 class="card__header">Caveman #</h3>
  //                       <p class="card__number--num">${JSON.stringify(
  //                         caveman.caveman
  //                       )}</p>
  //                       <span class="card__number--rank">${JSON.stringify(
  //                         caveman.attributes[1]
  //                       )}</span>
  //                   `;

  //   return div;
  // };

  // const backOfCard = () => {
  //   const { attributes } = caveman;

  //   const div = document.createElement('div');
  //   div.classList.add('card__attribute');

  //   for (let i = 0; i < attributes.length - 2; i++) {
  //     const obj = attributes[i + 2];

  //     for (const [key, value] of Object.entries(obj)) {
  //       div.innerHTML += `<h3 class="card__header">${JSON.stringify(
  //         key
  //       )}</h3><p class="card__details">${JSON.stringify(value)}</p>`;
  //     }
  //   }
  //   return div;
  // };

  return (
    <div className='cavemen__item card'>
      <div className='card__side card__side--front'>
        {caveman && (
          <img
            src={`https://caveman-images.s3.us-west-1.amazonaws.com/${caveman.caveman}.jpg`}
            alt={`Legacy Caveman ${caveman.caveman}`}
            className='card__img'
          />
        )}
        {/* {caveman && frontOfCard()} */}
      </div>
      {/* <div className='card__side card__side--back'>
        {caveman && backOfCard()}
      </div> */}
    </div>
  );
};

export default Card;
