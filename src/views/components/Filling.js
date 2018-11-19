import React, { Component } from 'react';
import helpers from '../../helpers';
import './Filling.css';

export default class Filling extends Component {
  state = {
    fondont: '',
    marzipan: '',
    innerFondont: 'filling__milesRight',
    multipleFondonts: true,
    onFond: '',
    active: ''
  };

  handleCardTransition = className => {
    if (this.state.fondont) return;
    if (className === 'Marzipan') {
      this.setState({
        fondont: 'filling__fadeOut',
        marzipan: 'filling__center'
      });
      this.props.change('filling', 'marzipan');
    } else if (className === 'Fondont') {
      this.setState({
        marzipan: 'filling__fadeOut',
        fondont: 'filling__fondont'
      });
    }
  };

  renderCard = el => (
    <div
      onTransitionEnd={el.evt}
      style={{
        borderRadius: '12px',
        boxShadow: '0px 4px 7px 4px rgba(30,30,30,0.1)',
        marginLeft: '25px',
        minWidth: '150px',
        maxWidth: '150px',
        overflow: 'hidden',
        textAlign: 'center',
        zIndex: 20
      }}
      className={el.class}
      onClick={() => this.handleCardTransition(el.header)}
    >
      <img
        src="https://dqzrr9k4bjpzk.cloudfront.net/images/1553673/367081012.jpg"
        style={{ width: '150px', marginTop: '-60px' }}
      />

      <h3 style={{ margin: 0 }}>{el.header || 'Tropical'}</h3>
      <p style={{ marginTop: '5px', padding: '5px' }}>
        {el.text || 'Tastes that might remind you of your last beach holiday!'}
      </p>
    </div>
  );

  renderFondonts = (el, i) => {
    const activeStyles =
      this.state.active === el.name
        ? 'box-shadow: 0px 0px 3px 2px rgba(150, 45, 0, 1) !important'
        : {};
    return (
      <div
        key={i}
        className={this.state.onFond}
        style={{
          ...activeStyles,
          width: '120px',
          height: '120px',
          backgroundColor: 'lightblue',
          margin: '10px',
          borderRadius: '12px',
          boxShadow:
            '0px 4px 7px 4px rgba(30,30,30,0.1),inset 0 0 8px rgba(30,30,30,0.1)',
          textAlign: 'center'
        }}
        onClick={() => {
          this.props.change('filling', el.name),
            this.setState({ active: el.name });
        }}
        onFocus={() => this.setState({ active: el.name })}
      >
        <h4 style={{ margin: 0 }}>{el.name}</h4>
        <p style={{ margin: 0 }}>{el.desc}</p>
      </div>
    );
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '3%',
          position: 'relative'
        }}
      >
        {this.renderCard({
          header: 'Marzipan',
          text: 'Traditional flavours of Almonds',
          class: this.state.marzipan
        })}
        {this.renderCard({
          header: 'Fondont',
          class: this.state.fondont,
          evt: () => {
            if (this.state.fondont === 'filling__fondont')
              this.setState({ onFond: 'filling__farout' });
          }
        })}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            position: 'absolute',
            left: '1000px',
            width: '150%'
          }}
        >
          {!this.state.multipleFondonts
            ? null
            : helpers.fondonts.map((el, i) => this.renderFondonts(el, i))}
        </div>
      </div>
    );
  }
}
