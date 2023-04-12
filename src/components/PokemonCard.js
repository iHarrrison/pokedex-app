import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PokemonCard = ({ pokemon, description }) => {
    return (
        <Card>
            <CardHeader title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} />
            <CardMedia component="img" image={pokemon.sprites.front_default} alt={pokemon.name} />
            <CardContent>
                <Typography variant="body1">Height: {pokemon.height} cm</Typography>
                <Typography variant="body1">Weight: {pokemon.weight} kg</Typography>
                <Typography variant="body1">Abilities:</Typography>
                <ul style={{ textTransform: 'capitalize' }}>
                    {pokemon.abilities.map((ability) => (
                        <li key={ability.ability.name}>
                            <Typography variant="body1">{ability.ability.name}</Typography>
                        </li>
                    ))}
                </ul>
                <Typography variant="body1">Types:</Typography>
                <ul style={{ textTransform: 'capitalize' }}>
                    {pokemon.types.map((type) => (
                        <li key={type.type.name}>
                            <Typography variant="body1">{type.type.name}</Typography>
                        </li>
                    ))}
                </ul>
                <Typography variant="body1">Pokemon Description:</Typography>
                <Typography variant="body1">{description}</Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1">Base Stats</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul style={{ textTransform: 'capitalize' }}>
                            {pokemon.stats.map((stat) => (
                                <li key={stat.stat.name}>
                                    <Typography variant="body1">{stat.stat.name}: {stat.base_stat}</Typography>
                                </li>
                            ))}
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1">Movesets</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul style={{ textTransform: 'capitalize' }}>
                            {pokemon.moves.map((move) => (
                                <li key={move.move.name}>
                                    <Typography variant="body1">{move.move.name}</Typography>
                                </li>
                            ))}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;
