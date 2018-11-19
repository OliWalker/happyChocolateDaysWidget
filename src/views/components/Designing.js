import React, { Component } from 'react';
import helpers from '../../helpers';
import '../../App.css';

export default class Designing extends Component {
  state = {
    letters: new Array(this.props.options.size).fill('')
  };

  handleChange = (e, i) => {
    const arr = this.state.letters;
    arr[i] = e.target.value;
    this.setState({ letters: arr });
  };

  handleKey = e => {
    if (e.which === 8 || e.which === 46) {
      if (e.target.previousSibling) e.target.previousSibling.focus();
    } else if (e.target.nextSibling) e.target.nextSibling.focus();
  };

  renderLetterSquare = (el, i) => (
    <input
      className="customLetter"
      maxLength="1"
      key={i}
      value={this.state.letters[i]}
      onChange={e => this.handleChange(e, i)}
      onKeyUp={e => this.handleKey(e)}
    />
  );

  render() {
    return (
      <div style={{ ...helpers.flex('column'), width: '100%' }}>
        <p style={{ fontSize: '3rem', fontWeight: 'bold', margin: '15px' }}>
          Choose Your Design!
        </p>
        <div style={{ maxWidth: '480px' }}>
          {this.state.letters.map((el, i) => this.renderLetterSquare(el, i))}
        </div>
      </div>
    );
  }
}
