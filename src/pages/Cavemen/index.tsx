import React, { useRef } from 'react';
import { useState } from 'react';
import legacyCavemen from '../../assets/data/legacy-cavemen.json';
import Card from '../../components/Utility/Card';
import ShowMoreButton from '../../components/Utility/ShowMoreButton';

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
  const [cavemenShowing, setCavemenShowing] = useState<number>(30);

  const renderCards = (): any => {
    return filteredCavemen
      ?.slice(0, cavemenShowing)
      .map((caveman: ICaveman) => {
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

  const showMore = () => {
    const currentlyShowing = cavemenShowing;
    setCavemenShowing(currentlyShowing + 30);
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
      {cavemenShowing < 555 && <ShowMoreButton showMore={showMore} />}
    </div>
  );
};

export default Cavemen;
