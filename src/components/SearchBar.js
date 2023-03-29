import React from 'react';
import { TextField } from '@material-ui/core';


const SearchBar = ({ value, onChange }) => {
    return (
        <TextField label="Search Pokemon" value={value} onChange={onChange} />
    );
};

export default SearchBar;
