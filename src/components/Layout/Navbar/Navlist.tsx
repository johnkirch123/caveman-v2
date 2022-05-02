import React from 'react';
import './navlist.css';
const Navlist = () => {
  return (
    <ul className='header__nav'>
      <li className='header__nav--list'>
        <a href='#' className='header__nav--link'>
          Dashboard
        </a>
      </li>
      <li className='header__nav--list'>
        <a href='#' className='header__nav--link'>
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
        <a href='/login' className='header__nav--link'>
          Connect
        </a>
      </li>
    </ul>
  );
};

export default Navlist;
