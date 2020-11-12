import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat } = this.props;
    selectFlat(this.props.index);
  }

  render () {
    const { flat } = this.props;
    const {
      name,
      imageUrl,
      price,
      priceCurrency
    } = flat;
    return (
      <div className={`card${this.props.selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})` }}
        onClick={this.handleClick} >
        <div className="card-category">{`${price} ${priceCurrency}`}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}

export default Flat;
