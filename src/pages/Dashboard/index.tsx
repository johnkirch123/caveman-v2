import React, { useEffect, useState } from 'react';
import { useGetAccountInfo, DappUI } from '@elrondnetwork/dapp-core';

import { tokenBaseURL } from '../../config/api';

interface ITokens {
  balance: string;
  ticker: string;
}

const Dashboard = () => {
  const { address } = useGetAccountInfo();
  const [tokenData, setTokenData] = useState<ITokens>();

  useEffect(() => {
    const tokenURL = `${tokenBaseURL}/${address}/tokens?identifier=SHELLS-c48657`;

    fetch(tokenURL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setTokenData(data[0]));
  }, []);

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
    </div>
  );
};

export default Dashboard;
