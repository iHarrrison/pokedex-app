import React from 'react';
import { Button } from '@mui/material';


const SearchButton = ({ onClick }) => {
    return (
        <Button variant="contained" color="primary" onClick={onClick}>
            Search
        </Button>
    );
};

export default SearchButton;
