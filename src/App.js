import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvpLBoWT6py96qHadIU8w2FkrfhUI4V06cK7uAC8USybTK2s&usqp=CAc',
    rating: 5.0,
  },
  {
    id: 2,
    name: 'Hotdog',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiH-PuoDAHJFXxjimB4E2jR5Uqv-9fJjayn6N19-Bq83vn8rEOUI2_5hExg&usqp=CAc',
    rating: 3.2,
  },
  {
    id: 3,
    name: '김밥',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzk3v5BkeSeALfIeOLBSx9cMqgAEMSAzN0Qg&usqp=CAU',
    rating: 4.9,
  },
];

function App() {
  return (
    <div>
      {foodLike.map(dish=> (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default App;