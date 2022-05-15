import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <div className='collections'>
      <div className='collections__user'>
        <h1>Welcome to your cavemen collections!</h1>
        <Link to='/cavemen'>Legacy Cavemen</Link>
      </div>
      <div className='collections__shells'></div>
    </div>
  );
};

export default Collections;
