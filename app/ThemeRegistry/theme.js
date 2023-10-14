'use client'

import { blue, red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';



let theme = createTheme({
    MuiRating: {
        variants: [
            {
                props: { variant: 'big', size: 'huge' },
                style: {
                    FontSize: '36px',
                    border: `2px dashed ${blue[900]}`,
                },
            },
            {
                props: { variant: 'dashed', color: 'secondary' },
                style: {
                    border: `4px dashed ${red[500]}`,
                },
            },
        ],
    },


    palette: {
        mode: 'light',
    },
});

theme = responsiveFontSizes(theme);
export default theme;









