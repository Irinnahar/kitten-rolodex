import React from 'react';
import Card from '../card/card.component';
import PropTypes from 'prop-types';

import './card-list.styles.css';
const CardList = props => {
  return (
    <div className="card-list">
      {
        props.users.map(user => {
          return <Card key={user.id} user={user} />
        })
      }
    </div>
  )
}

CardList.prototype = {
  user: PropTypes.object
}
export default CardList;
