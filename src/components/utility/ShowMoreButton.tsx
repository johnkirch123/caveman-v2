import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function ShowMoreButton() {
  return (
    <div className='button__show-more'>
      <FontAwesomeIcon icon={faAngleDown} className='button__show-more--icon' />
    </div>
  );
}

export default ShowMoreButton;
