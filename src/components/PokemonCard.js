import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';


const PokemonCard = ({ pokemon }) => {
    return (
        <Card>
            <CardHeader title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} />
            <CardMedia component="img" image={pokemon.sprites.front_default} alt={pokemon.name} />
            <CardContent>
                <Typography variant="body1">Height: {pokemon.height} cm</Typography>
                <Typography variant="body1">Weight: {pokemon.weight} kg</Typography>
                <Typography variant="body1">Abilities:</Typography>
                <ul>
                    {pokemon.abilities.map((ability) => (
                        <li key={ability.ability.name}>
                            <Typography variant="body1">{ability.ability.name}</Typography>
                        </li>
                    ))}
                </ul>
                <Typography variant="body1">Types:</Typography>
                <ul>
                    {pokemon.types.map((type) => (
                        <li key={type.type.name}>
                            <Typography variant="body1">{type.type.name}</Typography>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;