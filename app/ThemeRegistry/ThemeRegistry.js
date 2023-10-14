'use client';
import * as React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { createTheme } from '@mui/material/styles';
import theme from './theme';


let defaultTheme = createTheme(theme, {
    breakpoints: {
        values: {
            xs: 0,
            sm: 522,
            md: 767,
            lg: 1023,
            xl: 1536,
        }
    },

    palette: {
        spacing: 2,

    },
});



export default function ThemeRegistry({ children }) {



    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>

            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />

                {children}
            </ThemeProvider>

        </NextAppDirEmotionCacheProvider>
    );
}