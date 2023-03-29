import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import Card from './Card';

const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
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
        <div>
            <SearchBar value={searchTerm} onChange={handleSearchTermChange} />
            <SearchButton onClick={handleSearchButtonClick} />
            {selectedPokemon && <Card pokemon={selectedPokemon} />}
        </div>
    );
};

export default Pokemon;
