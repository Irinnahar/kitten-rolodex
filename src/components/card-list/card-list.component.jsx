import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

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

export default CardList;
