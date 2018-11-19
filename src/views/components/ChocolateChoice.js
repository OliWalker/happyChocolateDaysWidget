import React, { Component } from 'react';
import '../../App.css';

export default class ChocolateChoice extends Component {
  state = {
    dark: '',
    light: ''
  };

  handlClick = key => {
    this.setState({ [key]: 'ChocolateChoice__button__pressed' });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '80%',
          height: '80%',
          paddingTop: '15%'
        }}
      >
        <button
          className={`ChocolateChoice__button ${this.state.dark}`}
          onClick={() => this.handlClick('dark')}
        >
          Dark
        </button>
        <p style={{ fontSize: '2rem' }}>or</p>
        <button
          className={`ChocolateChoice__button ${this.state.light}`}
          onClick={() => this.handlClick('light')}
        >
          Milk
        </button>
      </div>
    );
  }
}
