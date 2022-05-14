import React from 'react';
import { ReactComponent as HeartIcon } from '../../../assets/img/heart.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__box'>
        <a
          {...{
            target: '_blank'
          }}
          className='footer__link'
          href='https://elrond.com/'
        >
          Made with <HeartIcon className='mx-1' /> by Elrond Network.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
