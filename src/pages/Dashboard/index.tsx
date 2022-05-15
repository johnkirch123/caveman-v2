import * as React from 'react';
import Actions from './Actions';
import TopInfo from './TopInfo';
import Transactions from './Transactions';
import { useGetAccountInfo, DappUI } from '@elrondnetwork/dapp-core';
import { contractAddress } from 'config';

const Dashboard = () => {
  const { address } = useGetAccountInfo();
  return (
    <div className='dashboard'>
      <h1>Welcome to your cavemen dashboard!</h1>
      <p>Address: {address}</p>
    </div>
  );
};

export default Dashboard;
