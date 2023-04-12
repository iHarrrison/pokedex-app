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
    const [pokemonDescription, setPokemonDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Limit on the API search is the current max pokemom number.
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
            .then(response => {
                setPokemonList(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (selectedPokemon) {
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon.id}`)
                .then(response => {
                    const englishDescription = response.data.flavor_text_entries.find(entry => entry.language.name === 'en');
                    setPokemonDescription(englishDescription.flavor_text);
                    setErrorMessage('');
                })
                .catch(error => {
                    console.log(error);
                    setPokemonDescription('');
                    setErrorMessage('Error retrieving Pokémon description.');
                });
        } else {
            setPokemonDescription('');
            setErrorMessage('');
        }
    }, [selectedPokemon]);

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
                    setPokemonDescription('');
                    setErrorMessage('Error retrieving Pokémon data.');
                });
        } else {
            setSelectedPokemon(null);
            setErrorMessage(`No Pokémon found with name '${searchTerm}'.`);
        }
    };

    return (
        <Container maxWidth="sm">
            <SearchBar value={searchTerm} onChange={handleSearchTermChange} />
            <SearchButton onClick={handleSearchButtonClick} />
            {errorMessage && <div>{errorMessage}</div>}
            {selectedPokemon && <PokemonCard pokemon={selectedPokemon} description={pokemonDescription} />}
        </Container>
    );
};

export default Pokemon;
