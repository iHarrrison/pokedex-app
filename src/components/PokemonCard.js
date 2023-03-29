import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';


const PokemonCard = ({ pokemon }) => {
    return (
        <Card>
            <CardHeader title={pokemon.name} />
            <CardMedia component="img" image={pokemon.sprites.front_default} alt={pokemon.name} />
            <CardContent>
                <Typography variant="body1">Height: {pokemon.height} cm</Typography>
                <Typography variant="body1">Weight: {pokemon.weight} kg</Typography>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;
