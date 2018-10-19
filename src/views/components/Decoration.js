import React, { Component } from 'react';
import helpers from '../../helpers';

export default class Decoration extends Component {
  state = {
    center: ''
  };

  renderCard = (el, i) => (
    <div
      /* onMouseOver={e => e.target.classList.add('grow')}
      onMouseLeave={e => e.target.classList.remove('grow')} */
      key={i}
      style={{
        borderRadius: '12px',
        boxShadow: '0px 4px 7px 4px rgba(30,30,30,0.1)',
        marginLeft: '25px'
      }}
    >
      <img
        src={el.img}
        style={{
          maxWidth: '200px',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px'
        }}
      />
      <p style={{ margin: '10px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        explicabo exercitationem ex delectus quae!
      </p>
    </div>
  );

  render() {
    return (
      <div style={{ ...helpers.flex('column'), width: '100%' }}>
        <p style={{ fontSize: '3rem', fontWeight: 'bold', margin: '15px' }}>
          Choose Your Decoration!
        </p>
        <div id="decoration__carosel">
          {[...helpers.decorations, ...helpers.decorations].map((el, i) =>
            this.renderCard(el, i)
          )}
        </div>
      </div>
    );
  }
}

//flamingos src="https://dqzrr9k4bjpzk.cloudfront.net/images/1521014/923826451.jpg"
