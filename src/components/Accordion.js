// AccordionComponent.js
import React from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordionComponent = ({ title, children }) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {title && (
                    <Typography variant="body1">{title}</Typography>
                )}
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionComponent;
