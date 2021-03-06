import React, { Component } from 'react';
import helpers from '../../helpers';

export default class SizeChoice extends Component {
  state = {
    choice: helpers.sizes[0]
  };

  handleArrow = dir => {
    let index = helpers.sizes.indexOf(this.state.choice) + dir;
    if (index < 0) index = helpers.sizes.length - 1;
    if (index === helpers.sizes.length) index = 0;
    this.setState({ choice: helpers.sizes[index] });
  };

  render() {
    return (
      <div>
        <i
          className="sizeArrow sizeArrow__left fas fa-chevron-left"
          onClick={() => this.handleArrow(-1)}
        />
        <i
          className="sizeArrow sizeArrow__right fas fa-chevron-right"
          onClick={() => this.handleArrow(1)}
        />

        <div
          style={{ textAlign: 'center' }}
          onClick={() => this.props.change('size', this.state.choice.size)}
        >
          <div style={{ marginTop: '-10px' }}>
            <img
              src={this.state.choice.img}
              style={{ maxHeight: '280px' }}
              onClick={() => this.setState({ active: this.state.choice.size })}
              class={
                this.state.active === this.state.choice.size ? 'active' : null
              }
            />
          </div>
          <p>{this.state.choice.desc}</p>
          <p style={{ fontWeight: 'bold', fontSize: '2.2rem' }}>{`£${this.state
            .choice.price / 100}.00`}</p>
        </div>
      </div>
    );
  }
}
