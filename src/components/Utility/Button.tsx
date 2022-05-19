import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  link: string;
  text: string;
}

const Button: React.FC<IProps> = ({ link, text }) => {
  return (
    <Link to={link} className='button'>
      {text}
    </Link>
  );
};

export default Button;
