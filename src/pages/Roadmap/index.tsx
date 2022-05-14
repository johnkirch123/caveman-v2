import * as React from 'react';
import roadmap from '../../assets/img/road-map.png';

const Roadmap = () => {
  return (
    <div className='roadmap'>
      <img
        src={roadmap}
        alt='Crypto Cavemen road map'
        className='roadmap__image'
      />
    </div>
  );
};

export default Roadmap;
