import * as React from 'react';
import background from '../../img/crypto-cavemen-banner-lines.png';

const Home = () => {
  return (
    <div
      className='home'
      style={{
        backgroundImage: `linear-gradient(to right bottom,
      rgba(3, 55, 200, 0.4),
      rgba(0, 0, 0, 0.75)),
    url(${background})`
      }}
    >
      <div className='landing'>
        <div className='landing__info'>
          <h1 className='landing__header'>CRYPTO CAVEMEN</h1>
          <h3 className='landing__text'>Ooga Boogah!</h3>
          <div className='cta__btn'>
            <a href='#' target='_blank' rel='nonreferrer' className='cta__link'>
              Purchase now for 0.2 EGLD at special pre-sale price!
            </a>
          </div>
        </div>
      </div>
      <section className='roadmap'>
        <i className='fa-solid fa-angle-down fa-10x roadmap__down-arrow'></i>
        <img
          src='/img/road-map.png'
          alt='Crypto Cavemen road map'
          className='roadmap__image'
        />
      </section>
    </div>
  );
};

export default Home;
