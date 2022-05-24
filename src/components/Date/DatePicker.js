import './DatePicker.scss';
import React from 'react';

function DatePicker(props) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <div className='date'>
      <div>
        <p>Current Date:</p>
        <p className='date'>
          {props.date.toLocaleDateString('de-DE', options)}
        </p>
      </div>
      <div className='row'>
        <button type='button' onClick={() => props.changeDate(-7)}>
          -7
        </button>
        <button type='button' onClick={() => props.changeDate(-1)}>
          -1
        </button>
        <button type='button' onClick={() => props.setToday()}>
          Today
        </button>
        <button type='button' onClick={() => props.changeDate(+1)}>
          +1
        </button>
        <button type='button' onClick={() => props.changeDate(+7)}>
          +7
        </button>
      </div>
    </div>
  );
}

export default DatePicker;
