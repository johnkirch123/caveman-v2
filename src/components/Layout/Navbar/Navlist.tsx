import React from 'react';

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
          <a href='/dashboard' className='nav__link'>
            Dashboard
          </a>
        )}
      </li>
      <li className='nav__item'>
        <a href='/cavemen' className='nav__link'>
          Cavemen
        </a>
      </li>
      <li className='nav__item'>
        <a href='/about' className='nav__link'>
          About
        </a>
      </li>
      <li className='nav__item'>
        <a href='/roadmap' className='nav__link'>
          Roadmap
        </a>
      </li>
      <li className='nav__item'>
        {isLoggedIn ? (
          <a href='/' className='nav__link' onClick={logout}>
            Logout
          </a>
        ) : (
          <a href='/unlock' className='nav__link'>
            Connect
          </a>
        )}
      </li>
    </ul>
  );
};

export default Navlist;
