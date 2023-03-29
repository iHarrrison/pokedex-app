import React from 'react';

const Card = ({ pokemon }) => {
    return (
        <div className="card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height} cm</p>
            <p>Weight: {pokemon.weight} kg</p>
        </div>
    );
};

export default Card;
