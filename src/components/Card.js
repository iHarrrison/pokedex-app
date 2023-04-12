import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
} from '@material-ui/core';

const CardComponent = ({ title, image, alt, children }) => {
    return (
        <Card>
            {image && (
                <CardMedia component="img" image={image} alt={alt} />
            )}
            <CardContent>
                {title && (
                    <CardHeader
                        title={title.charAt(0).toUpperCase() + title.slice(1)}
                    />
                )}
                {children}
            </CardContent>
        </Card>
    );
};

export default CardComponent;
