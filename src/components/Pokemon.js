import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import PokemonCard from './PokemonCard';

const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    // limit on the API get is the current maximum number of pokemon in the API.
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
            .then(response => {
                setPokemonList(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchButtonClick = () => {
        const selected = pokemonList.find(p => p.name === searchTerm.toLowerCase());
        if (selected) {
            axios.get(selected.url)
                .then(response => {
                    setSelectedPokemon(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            setSelectedPokemon(null);
        }
    };

    return (
        <Container maxWidth="sm">
            <SearchBar value={searchTerm} onChange={handleSearchTermChange} />
            <SearchButton onClick={handleSearchButtonClick} />
            {selectedPokemon && <PokemonCard pokemon={selectedPokemon} />}
        </Container>
    );
};

export default Pokemon;
