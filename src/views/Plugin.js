import React, { Component } from 'react';
import SizeChoice from './components/SizeChoice';
import Filling from './components/Filling';
import Decoration from './components/Decoration';

import helpers from '../helpers';

const Pages = [<SizeChoice />, <Decoration />];

export default class Plugin extends Component {
  state = {
    page: Pages[0],
    size: '',
    type: '',
    words: ''
  };

  handlePageChange = dir => {
    let index = Pages.indexOf(this.state.page) + dir;
    if (index < 0) index = helpers.sizes.length - 1;
    if (index === Pages.length) index = 0;
    this.setState({ page: Pages[index] });
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
      position: 'relative'
    };

    return (
      <div style={divStyle}>
        {this.state.page}
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
