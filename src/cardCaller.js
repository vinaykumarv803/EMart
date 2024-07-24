// App.js
import React from 'react';
import CardSlider from './CardSlider';

const cards = [
  { title: 'Card 1', content: 'Content for Card 1' },
  { title: 'Card 2', content: 'Content for Card 2' },
  { title: 'Card 3', content: 'Content for Card 3' },
];

function CardCaller() {
  return (
    <div className="App">
      <CardSlider cards={cards} />
    </div>
  );
}

export default CardCaller;
