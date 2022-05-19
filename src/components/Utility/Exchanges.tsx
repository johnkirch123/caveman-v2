import React from 'react';

interface IProps {
  collection: string;
}

const Exchanges: React.FC<IProps> = ({ collection }) => {
  return (
    <div className='row'>
      <div
        className='col-md-12 mt-5 p-4 pr-5 pl-5'
        style={{ backgroundColor: '#333' }}
      >
        <p className='text-center'>
          No NFT&apos;s owned, purchase on an exchange!
        </p>
        <a
          href={`https://deadrare.io/collection/${collection}`}
          target='_blank'
          rel='noreferrer'
          className='btn btn-primary mr-5 mt-3'
        >
          Dead Rare
        </a>
        <a
          href={`https://isengard.market/collection/${collection}`}
          target='_blank'
          rel='noreferrer'
          className='btn btn-primary mr-5 mt-3'
        >
          Isengard
        </a>
        <a
          href={`https://www.trust.market/collection/${collection}`}
          target='_blank'
          rel='noreferrer'
          className='btn btn-primary mt-3'
        >
          Trust Market
        </a>
      </div>
    </div>
  );
};

export default Exchanges;
