import React from 'react';
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';
import Navlist from './Navlist';
import logo from '../../../img/logo.png';
import bolt from '../../../img/elrond-bolt.png';
// import { ReactComponent as ElrondLogo } from './../../../assets/img/elrond.svg';

const Navbar = () => {
  const { address } = useGetAccountInfo();
  console.log('address', address);

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  const isLoggedIn = Boolean(address);

  return (
    <BsNavbar className='header'>
                  <div className="logo__box">
                <Link to="#" className="logo__link"><img src={logo} alt="logo" className="logo__image" /></Link>
            </div>
            <nav className="nav">
        <Navlist address={address} logout={handleLogout} />
                
            </nav>
        <Link
          className='header__logo--link'
          to={isLoggedIn ? routeNames.dashboard : routeNames.home}
        >
          <h3 className='header__logo--text'>Crypto Cavemen</h3>
        </Link>
           
    </BsNavbar>
  );
};

export default Navbar;
