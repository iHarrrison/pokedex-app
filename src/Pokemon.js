import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                setPokemon(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {pokemon.map(p => (
                <div key={p.name}>
                    {p.name}
                </div>
            ))}
        </div>
    );
};

export default Pokemon;
