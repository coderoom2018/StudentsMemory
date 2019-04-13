import React, { Component } from 'react';
import './CardsContainer.css';
import Card from './Card';

export default class CardsContainer extends Component {
  render() {
    return ( 
      <div className="content">
        <h2>Cards Container</h2>
        <section className="cardContainer">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    )
  }
} 