import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from '@mui/material';

const PokemonCard = ({ title, image, alt, children }) => {
    return (
        <Card>
            <CardHeader title={<Typography variant="h6" style={{ textTransform: 'capitalize' }}>{title}</Typography>} />
            <CardMedia component="img" image={image} alt={alt} />
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
};

export default PokemonCard;
