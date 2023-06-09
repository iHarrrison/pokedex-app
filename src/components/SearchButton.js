import React from 'react';
import { Button } from '@mui/material';

const SearchButton = ({ onClick }) => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onClick();
        }
    };

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={onClick}
            onKeyPress={handleKeyPress}
            sx={{
                width: '120px',
                padding: '8px 16px',
            }}
        >
            Search
        </Button>
    );
};

export default SearchButton;
