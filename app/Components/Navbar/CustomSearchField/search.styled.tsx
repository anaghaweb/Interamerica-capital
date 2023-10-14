'use client'
import { styled, Theme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const Search = styled('div')(({ theme }: { theme: Theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',
    color: '#000000',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto', 
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }: { theme: Theme }) => ({
    padding: theme.spacing(0,1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#787878'
}));

export const StyledInputBase = styled(InputBase)(({ theme }: { theme: Theme }) => ({
    color: 'inherit',
     height: '39px',
    '& .MuiInputBase-input': {   
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '50ch',
        },
    },
}));
