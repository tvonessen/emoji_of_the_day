import React from 'react';
import './Emoji.scss';

function Emoji(props) {
  let date = props.date;
  let emojis = props.emojis;
  if (emojis) {
    let index = date.getFullYear();
    index += date.getMonth() + date.getDate() * 1337;
    index %= 3000;
    // index %= this.state.emojis.length;
    index = Math.floor(index);
    let currEmoji = emojis[index];
    return (
      <div className='Emoji'>
        <p className='emoji'>{currEmoji.char}</p>
        <p className='name'>{currEmoji.name.split(':')[0]}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>no data</h2>
      </div>
    );
  }
}

export default Emoji;
