import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ value, onChange }) => {
    return (
        <TextField
            label="Search Pokemon"
            value={value}
            onChange={onChange}
            sx={{ width: '30%' }}
        />
    );
};

export default SearchBar;
