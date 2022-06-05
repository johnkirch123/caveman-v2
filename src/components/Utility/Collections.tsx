import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_COLLECTIONS } from '../../GraphQL/Queries';
import CollectionItem from './CollectionItem';

const Collections = (): JSX.Element => {
  const { error, loading, data } = useQuery(LOAD_COLLECTIONS);
  const [collections, setCollections] = useState<any>([]);

  useEffect(() => {
    if (data) {
      const sortedCollections: any[] = [...data.listListings.results]
        .sort((a: any, b: any): number => {
          return a.rank - b.rank;
        })
        .filter((collection) => collection.rank !== null);
      setCollections(sortedCollections);
      console.log(sortedCollections);
    }
  }, [data]);

  return (
    <div className='collection__container'>
      {collections?.map((collection: any) => (
        <a
          key={collection.collectionTicker}
          href={`https://deadrare.io/collection/${collection.collectionTicker}`}
          className='collection__link--deadrare'
          target='_blank'
          rel='noreferrer'
        >
          <CollectionItem collection={collection} />
        </a>
      ))}
    </div>
  );
};

export default Collections;
