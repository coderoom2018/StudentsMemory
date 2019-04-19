import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="im_number">Immersive: 12기</div>
        <div className="card_imageContainer">
          <img />
        </div>
      </div>
    )
  }
}