import React from 'react';
import './Banner.scss';

function Banner(props) {
  return (
    <div className='Banner'>
      <p className={props.class}>{props.message}</p>
    </div>
  );
}

export default Banner;
