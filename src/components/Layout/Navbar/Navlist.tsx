import React from 'react';
import './navlist.css';

interface IProps {
  address: string;
  logout: () => void;
}

const Navlist: React.FC<IProps> = ({ address, logout }) => {
  const isLoggedIn = Boolean(address);

  return (
    <ul className='header__nav'>
      <li className='header__nav--list'>
        <a href='#' className='header__nav--link'>
          Dashboard
        </a>
      </li>
      <li className='header__nav--list'>
        <a href='/cavemen' className='header__nav--link'>
          Cavemen
        </a>
      </li>
      <li className='header__nav--list'>
        <a href='#' className='header__nav--link'>
          About
        </a>
      </li>
      <li className='header__nav--list'>
        <a href='#' className='header__nav--link'>
          Roadmap
        </a>
      </li>
      <li className='header__nav--list'>
        {isLoggedIn ? (
          <a href='/' className='header__nav--link' onClick={logout}>
            Logout
          </a>
        ) : (
          <a href='/unlock' className='header__nav--link'>
            Connect
          </a>
        )}
      </li>
    </ul>
  );
};

export default Navlist;
