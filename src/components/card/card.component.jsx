import React from 'react';
import './card.component.css';

const Card = props => {
  return (
    <div className="card-container">
      <img src={`https://www.robohash.org/${props.user.id}/?set=set4&size=180x180`} />
      <h3>{props.user.name} </h3>
      <p>{props.user.email}</p>
    </div>
  )
}

export default Card;