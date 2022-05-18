import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import legacyCavemen from '../../assets/data/legacy-cavemen.json';
import Card from '../../components/Utility/Card';

interface ICaveman {
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
}

const Cavemen: React.FC = (): JSX.Element => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [filteredCavemen, setFilteredCavemen] = useState<any>(legacyCavemen);

  useEffect(() => {
    setFilteredCavemen(
      legacyCavemen.sort((a, b) => {
        return (
          parseInt(a.attributes[1]['rarity-rank']!) -
          parseInt(b.attributes[1]['rarity-rank']!)
        );
      })
    );
  }, []);

  const renderCards = (): any => {
    return filteredCavemen.slice(0, 30).map((caveman: ICaveman) => {
      return <Card key={caveman.caveman} caveman={caveman} />;
    });
  };

  const onHandleSearch = (searchTerm: string) => {
    if (searchTerm === '') setFilteredCavemen(legacyCavemen);
    setFilteredCavemen(
      legacyCavemen.filter((caveman) =>
        caveman.name.toLowerCase().includes(searchTerm)
      )
    );
  };

  return (
    <div className='cavemen'>
      <div className='cavemen__header'>
        Revealed Cavemen listed in order from most to least rare:
        <input
          type='text'
          className='search__input'
          id='search_cavemen'
          placeholder='Search Cavemen...'
          onChange={(e) => onHandleSearch(e.target.value)}
        />
      </div>
      <div className='cavemen__body' ref={bodyRef}>
        {renderCards()}
      </div>
    </div>
  );
};

export default Cavemen;
