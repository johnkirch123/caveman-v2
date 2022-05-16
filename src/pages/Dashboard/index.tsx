import React, { useEffect, useState } from 'react';
import { useGetAccountInfo } from '@elrondnetwork/dapp-core';

import { tokenBaseURL } from '../../config/api';
import Card from '../../components/utility/Card';

interface ITokens {
  balance: string;
  ticker: string;
}

interface INFT {
  identifier: string;
  collection: string;
  name: string;
  url: string;
}

const Dashboard = () => {
  const { address } = useGetAccountInfo();
  const [tokenData, setTokenData] = useState<ITokens>();
  const [legacyData, setLegacyData] = useState<INFT[]>();
  const [sftData, setSftData] = useState<INFT[]>();

  useEffect(() => {
    const tokenURL = `${tokenBaseURL}/${address}/tokens?identifier=SHELLS-c48657`;
    const legacyURL = generateNFTURL(address, 'CAVEMEN-9ab535');
    const sftURL = generateNFTURL(address, 'CAVEMEN-1690ca');

    fetch(tokenURL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setTokenData(data[0]));
    fetch(legacyURL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setLegacyData(data));
    fetch(sftURL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setSftData(data));
  }, []);

  const generateNFTURL = (address: string, collection: string): string => {
    return `${tokenBaseURL}/${address}/nfts?size=75&collections=${collection}`;
  };

  const addCommas = (num: string | undefined): string => {
    if (num === undefined) return 'Loading...';
    const str = num.split('.');
    let elemsToDelete = 8;
    const strArray = str[0].split('');
    while (elemsToDelete--) strArray.pop();
    str[0] = strArray.join('');
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
  };

  console.log('sftData: ', sftData);

  const renderCards = (_data: INFT[]): any => {
    if (_data === undefined) return null;
    return _data.map((nft: INFT) => {
      return (
        <div key={nft.identifier} className='dashboard__card'>
          <img src={nft.url} alt={nft.name} className='dasboard__card--image' />
        </div>
      );
    });
  };

  return (
    <div className='dashboard'>
      <div className='dashboard__user'>
        <h1>Welcome to your cavemen dashboard!</h1>
        <h4>Address: {address}</h4>
      </div>
      <div className='dashboard__shells'>
        <h5>Shells (SHELLS-c48657) Balance:</h5>
        <h5>{addCommas(tokenData?.balance)}</h5>
      </div>
      <div className='dashboard__area'>
        <h4>Crypto Cavemen (CAVEMEN-9ab535)</h4>
        <div className='dashboard__collection'>
          {legacyData && renderCards(legacyData)}
        </div>
      </div>
      <div className='dashboard__area'>
        <h4>Crypto Cavemen (CAVEMEN-1690ca)</h4>
        <div className='dashboard__collection'>
          {sftData && renderCards(sftData)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
