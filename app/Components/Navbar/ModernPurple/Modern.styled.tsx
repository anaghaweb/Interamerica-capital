'use client'
import { styled, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'
import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const StyledAppBar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
    height:'3rem',
    [theme.breakpoints.up('md')]: {
        height:'5rem'
    },    
  '*, *:visited ': {
    textDecoration: 'none',
    boxSizing: 'border-box', 
    },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
    background: 'linear-gradient(to right, #CC99FF, #CCFFE6)',
    color: '#6A9153',
    position: "relative",
    height: 'inherit',
    padding: theme.spacing(1),    
 
}));

export const StyledTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    flexGrow: 1,
    fontFamily: "inherit",
    fontWeight: 500,
    color: "#4D4D4D",
    textDecoration: "none",
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        ...theme.typography.h6,
        padding: "0",
    },
}))as typeof Link;

export const LogoTitleWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({     
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'inherit',
    backgroundColor: 'inherit'
}))

export const LogoWrapper = styled(IconButton)(({ theme }: { theme: Theme }) => ({
    height: '5rem', 
    width: '5rem',
    display: 'flex' ,
    [theme.breakpoints.down('sm')]: {
        display:'none'
    },
    [theme.breakpoints.down('md')]: {
        height:'3rem'
    }
}))
export const CancelButtonWrapper = styled(Button)(({ theme }: { theme: Theme }) => ({
    
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    height: '39px',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0.15rem',
    zIndex: '99',
}))

export const SearchButtonWrapper = styled(Button)(({ theme }: { theme: Theme }) => ({     
    display:'flex',
    flexGrow: 1,
    minWidth: 'fit-content',
    color: 'inherit',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('lg')]:{
        display: 'none' 
    },
}))