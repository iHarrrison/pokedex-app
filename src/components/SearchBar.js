import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <input type="text" value={value} onChange={onChange} placeholder="Search Pokemon..." />
    );
};

export default SearchBar;
