import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <div className='collections'>
      <h1>Cavemen Collections</h1>
      <div className='collections__area'>
        <div className='collections__card collections__card--legacy'>
          <Link to='/cavemen' className='collections__card--link'>
            Legacy Cavemen
            <img
              src='https://caveman-images.s3.us-west-1.amazonaws.com/7256.jpg'
              alt='Legacy Caveman Collections'
              className='collections__card--image'
            />
            CAVEMEN-9ab535
          </Link>
        </div>
        <div className='collections__card collections__card--legacy'>
          <Link to='/legacySFT' className='collections__card--link'>
            Cryptopia SFT&apos;s
            <img
              src='https://media.elrond.com/nfts/asset/bafybeiagg4pqrkhc3yybrq32ltgdwkkqvhwexloxhpffmbzygukcaxusra/cryptopia-land.png'
              alt='Legacy Caveman Collections'
              className='collections__card--image'
            />
            CAVEMEN-1690ca
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;
