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
        'rarity-rank': string;
      },
      {
        background: string;
      },
      {
        body: string;
      },
      {
        feet: string;
      },
      {
        clothing: string;
      },
      {
        hair: string;
      },
      {
        arms: string;
      },
      {
        environment: string;
      },
      {
        head: string;
      }
    ];
  };
}

const Card = ({ caveman }: IProps) => {
  return (
    <div className='cavemen__item Ccard'>
      <div className='Ccard__side Ccard__side--front'>
        {caveman && (
          <>
            <img
              src={`https://caveman-images.s3.us-west-1.amazonaws.com/${caveman.caveman}.jpg`}
              alt={`Legacy Caveman ${caveman.caveman}`}
              className='Ccard__img'
            />
            <h3 className='Ccard__header font-weight-bold'>Caveman #</h3>
            <h4 className='Ccard__number--num text-center font-weight-bold'>
              {caveman.caveman}
            </h4>
            <p className='Ccard__number--rank'>
              {JSON.stringify(caveman.attributes[1])}
            </p>
          </>
        )}
      </div>
      <div className='Ccard__side Ccard__side--back'>
        <div className='Ccard__attribute'>
          {caveman &&
            caveman.attributes.map((attribute, i) => {
              return (
                <div key={i}>
                  <h5 className='Ccard__details--header font-weight-bold'>
                    {Object.keys(attribute)}
                  </h5>
                  <h6 className='Ccard__details font-weight-bold'>
                    {Object.values(attribute)}
                  </h6>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;
