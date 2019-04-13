import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    return (
      <div>
        <div>Students Card</div>
        <div>Immersive: 12기</div>
        <div className="card_imageContainer">
          <img />
        </div>
      </div>
    )
  }
}