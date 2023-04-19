import React from 'react';
import { TextField } from '@mui/material';


const SearchBar = ({ value, onChange }) => {
    return (
        <TextField label="Search Pokemon" value={value} onChange={onChange} />
    );
};

export default SearchBar;
