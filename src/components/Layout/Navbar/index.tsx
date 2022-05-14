import React from 'react';
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';
import logo from '../../../assets/img/logo.png';
import Navlist from './Navlist';
// import { ReactComponent as ElrondLogo } from './../../../assets/img/elrond.svg';

const Navbar = () => {
  const { address } = useGetAccountInfo();
  console.log('address', address);

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  const isLoggedIn = Boolean(address);

  return (
    <header className='header'>
      <div className='logo__box'>
        <Link
          to={isLoggedIn ? routeNames.dashboard : routeNames.home}
          className='logo__link'
        >
          <img src={logo} alt='logo' className='logo__image' />
        </Link>
      </div>
      <nav className='nav'>
        <Navlist address={address} logout={handleLogout} />
      </nav>
    </header>
  );
};

export default Navbar;
