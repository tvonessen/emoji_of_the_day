import React from 'react';
import Header from './components/Header/Header';
import DatePicker from './components/Date/DatePicker';
import Emoji from './components/Emoji/Emoji';
import Banner from './components/Banner/Banner';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: 'loading',
      date: new Date(),
      emojis: null,
      currEmoji: {
        codes: '2620 FE0F',
        char: '☠️',
        name: 'skull and crossbones',
        category: 'Smileys & Emotion (face-negative)',
        group: 'Smileys & Emotion',
        subgroup: 'face-negative',
      },
    };

    this.changeDate = this.changeDate.bind(this);
    this.setToday = this.setToday.bind(this);
  }

  changeDate(days) {
    this.setState((currentState) => {
      let currDate = currentState.date;
      let date = new Date(currDate.setDate(currDate.getDate() + days));
      return {
        date,
      };
    });
    console.log(this.state.date);
    this.selectEmoji();
  }

  setToday() {
    let date = new Date();
    this.selectEmoji(date);
    this.setState({ date });
  }

  selectEmoji() {
    let date = this.state.date;
    if (this.state.emojis) {
      let index = date.getFullYear();
      index += date.getMonth() + date.getDate() * 1337;
      index %= 3000;
      // index %= this.state.emojis.length;
      index = Math.floor(index);
      console.log(index);
      let currEmoji = this.state.emojis[index];
      this.setState({ currEmoji });
    } else {
      console.log('Before:' + this.state.currEmoji.char);
      this.setState({
        currEmoji: {
          codes: '2620 FE0F',
          char: '☠️',
          name: 'skull and crossbones',
          category: 'Smileys & Emotion (face-negative)',
          group: 'Smileys & Emotion',
          subgroup: 'face-negative',
        },
      });
      console.log('After:' + this.state.currEmoji.char);
    }
  }

  fetchEmojiData() {
    fetch('/emoji.json')
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        this.setState({
          emojis: jsonData,
          appState: 'ready',
        });
      })
      .catch(() => {
        console.log('Could not fetch data.');
        this.setState({
          appState: 'error',
        });
      });
  }

  componentDidMount() {
    this.fetchEmojiData();
  }

  render() {
    switch (this.state.appState) {
      default:
        return <Banner class='error' message='Error fetching data' />;
      case 'loading':
        return <Banner class='info' message='Loading...' />;
      case 'ready':
        return (
          <div className='App'>
            <Header title='Emoji of the Day' />
            <DatePicker
              date={this.state.date}
              changeDate={this.changeDate}
              setToday={this.setToday}
            />
            <Emoji date={this.state.date} emojis={this.state.emojis} />
          </div>
        );
    }
  }
}

export default App;
