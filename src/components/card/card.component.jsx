import React from 'react';
import PropTypes from 'prop-types';

import './card.component.css';

const Card = (props) => {
  const { name, email, id } = props.user;
  return (
    <div className="card-container">
      <img
        src={`https://www.robohash.org/${id}/?set=set4&size=180x180`}
        alt={name} />
      <h3>{name} </h3>
      <p>{email}</p>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number
}

export default Card;
