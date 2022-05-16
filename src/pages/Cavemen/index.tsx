import React, { useEffect, useState, useRef } from 'react';
import Card from '../../components/Utility/Card';
import legacyCavemen from '../../assets/data/web-minted.json';

interface ICaveman {
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
}

const Cavemen: React.FC = (): JSX.Element => {
  const cavemen: any = legacyCavemen;
  const searchRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const renderCards = (): any => {
    return cavemen.slice(0, 20).map((caveman: ICaveman) => {
      return <Card key={caveman.caveman} caveman={caveman} />;
    });
  };

  return (
    <div className='cavemen'>
      <div className='cavemen__header'>
        Revealed Cavemen listed in order from most to least rare:
        <form action='#' className='search'>
          <input
            type='text'
            className='search__input'
            ref={searchRef}
            id='search_cavemen'
            // ref={searchRef}
            placeholder='Search Cavemen...'
          />
        </form>
      </div>
      <div className='cavemen__body' ref={bodyRef}>
        {renderCards()}
      </div>
    </div>
  );
};

export default Cavemen;
