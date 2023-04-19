import React from 'react';
import Typography from '@material-ui/core/Typography';
import PokemonCard from './PokemonCard'; // Import PokemonCard
import PokemonAccordion from './PokemonAccordion'; // Import PokemonAccordion

const PokemonSummary = ({ pokemon, description }) => {
    return (
        <PokemonCard title={pokemon.name} image={pokemon.sprites.front_default} alt={pokemon.name}>
            <Typography variant="body1">Height: {pokemon.height}0 cm</Typography>
            <Typography variant="body1">Weight: {pokemon.weight} g</Typography>
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
            <PokemonAccordion title="Base Stats">
                <ul style={{ textTransform: 'capitalize' }}>
                    {pokemon.stats.map((stat) => (
                        <li key={stat.stat.name}>
                            <Typography variant="body1">{stat.stat.name}: {stat.base_stat}</Typography>
                        </li>
                    ))}
                </ul>
            </PokemonAccordion>
            <PokemonAccordion title="Movesets">
                <ul style={{ textTransform: 'capitalize' }}>
                    {pokemon.moves.map((move) => (
                        <li key={move.move.name}>
                            <Typography variant="body1">{move.move.name}</Typography>
                        </li>
                    ))}
                </ul>
            </PokemonAccordion>
        </PokemonCard>
    );
};

export default PokemonSummary;