import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  address: string;
  logout: () => void;
}

const Navlist: React.FC<IProps> = ({ address, logout }) => {
  const isLoggedIn = Boolean(address);

  return (
    <ul className='nav__list'>
      <li className='nav__item'>
        {isLoggedIn && (
          <Link to='/dashboard' className='nav__link'>
            Dashboard
          </Link>
        )}
      </li>
      <li className='nav__item'>
        <Link to='/collections' className='nav__link'>
          Collections
        </Link>
      </li>
      <li className='nav__item'>
        <Link to='/about' className='nav__link'>
          About
        </Link>
      </li>
      <li className='nav__item'>
        <Link to='/roadmap' className='nav__link'>
          Roadmap
        </Link>
      </li>
      <li className='nav__item'>
        {isLoggedIn ? (
          <Link to='/' className='nav__link' onClick={logout}>
            Logout
          </Link>
        ) : (
          <Link to='/unlock' className='nav__link'>
            Connect
          </Link>
        )}
      </li>
    </ul>
  );
};

export default Navlist;
