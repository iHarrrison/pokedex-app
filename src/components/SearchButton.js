import React from 'react';
import { Button } from '@material-ui/core';


const SearchButton = ({ onClick }) => {
    return (
        <Button variant="contained" color="primary" onClick={onClick}>
            Search
        </Button>
    );
};

export default SearchButton;
