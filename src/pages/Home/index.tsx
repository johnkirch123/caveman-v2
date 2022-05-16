import * as React from 'react';
import background from '../../assets/img/hero-banner.png';
import Button from '../../components/Utility/Button';

const Home = () => {
  return (
    <div
      className='home'
      style={{
        backgroundImage: `linear-gradient(to right bottom,
      rgba(0, 0, 95, 0.6),
      rgba(0, 0, 0, 0.85)),
    url(${background})`
      }}
    >
      <div className='landing'>
        <div className='landing__info'>
          <h1 className='landing__header'>CRYPTO CAVEMEN</h1>
          <h3 className='landing__text'>
            Ooga Boogah! Welcome to da new caveman site! Dis where all Cryptopia
            activities will be open, sit by da campfire and enjoy some time wit
            fellow cave dwellers! Dashboard will be where you can see all your
            caveman NFT&apos;s, Shells, and other fun stuff!
          </h3>
          <div className='cta__btn'>
            <Button link='/' text="Gen 2 Cavemen Comin' soon!" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
