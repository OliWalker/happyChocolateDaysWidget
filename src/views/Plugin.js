import React, { Component } from 'react';
import SizeChoice from './components/SizeChoice';
import Filling from './components/Filling';
import Decoration from './components/Decoration';
import ChocolateChoice from './components/ChocolateChoice';

import helpers from '../helpers';
import Designing from './components/Designing';

export default class Plugin extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      size: 16,
      decoration: '',
      filling: '',
      word: ''
    };

    this.Pages = [
      <SizeChoice change={this.handleStateChange} active={this.state.size} />,
      <Decoration
        change={this.handleStateChange}
        active={this.state.decoration}
      />,
      <Filling change={this.handleStateChange} active={this.state.filling} />,
      <ChocolateChoice change={this.handleStateChange} />,
      <Designing
        change={this.handleStateChange}
        active={this.state.filling}
        options={this.state}
      />
    ];
  }

  componentDidMount() {
    this.setState({ page: this.Pages[3] });
  }

  handleStateChange = (key, val) => {
    this.setState({ [key]: val });
  };

  handlePageChange = dir => {
    let index = this.Pages.indexOf(this.state.page) + dir;
    if (index < 0) index = helpers.sizes.length - 1;
    if (index === this.Pages.length) index = 0;
    this.setState({ page: this.Pages[index] });
  };

  render() {
    const divStyle = {
      width: '100%',
      height: '100%',
      backgroundColor: 'ghostwhite',
      borderRadius: '10px',
      boxShadow: '0px 4px 7px 4px rgba(30,30,30,0.1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      position: 'relative',
      overflow: 'hidden'
    };

    return (
      <div style={divStyle}>
        <div style={{ ...helpers.flex('column'), width: '100%' }}>
          <p style={{ fontSize: '3rem', fontWeight: 'bold', margin: '15px' }}>
            Choose Your Filling!
          </p>

          {this.state.page}
        </div>

        <div>
          <button
            className="navButton backButton"
            onClick={() => this.handlePageChange(-1)}
          >
            back
          </button>
          <button
            className="navButton nextButton"
            onClick={() => this.handlePageChange(1)}
          >
            next
          </button>
        </div>
      </div>
    );
  }
}
