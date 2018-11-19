import React, { Component } from 'react';
import helpers from '../../helpers';
import '../../App.css';

export default class Decoration extends Component {
  state = {
    center: '',
    active: ''
  };

  renderCard = (el, i) => (
    <div
      key={i}
      style={{
        borderRadius: '12px',
        boxShadow: '0px 4px 7px 4px rgba(30,30,30,0.1)',
        marginLeft: '25px'
      }}
      onClick={() => {
        this.props.change('decoration', el.header);
        this.setState({ active: el.header });
      }}
      className={this.state.active === el.header ? 'active' : ''}
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
      <div className="decoration__carosel">
        {[...helpers.decorations, ...helpers.decorations].map((el, i) =>
          this.renderCard(el, i)
        )}
      </div>
    );
  }
}

//flamingos src="https://dqzrr9k4bjpzk.cloudfront.net/images/1521014/923826451.jpg"
