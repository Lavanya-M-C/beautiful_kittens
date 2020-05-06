import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt='kitten' src={`https://robohash.org/${props.kitten.id}?set=set4&size=180x180`} />
        <p>Name: {props.kitten.name}</p>
        <p>Username: {props.kitten.username}</p>
        <p>Email: {props.kitten.email}</p>
    </div>
);