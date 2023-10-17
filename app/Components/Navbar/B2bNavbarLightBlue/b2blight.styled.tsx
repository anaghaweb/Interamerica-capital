'use client'
import { styled, Theme } from '@mui/material/styles';
import { Box, IconButton, Link, Toolbar, AppBar, Button, Typography } from '../mui-components';


export const StyledAppBar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
    width: '100%',
    maxWidth: '1600px',
    margin:'0 auto',
    height: '3rem',
    [theme.breakpoints.up('md')]: {
        height:'4rem'
    },    
     '*,*:visited':{
         textDecoration: 'none',
         boxSizing: 'border-box', 
    }, 
     
}));

export const StyledToolbar = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
    backgroundColor: '#ffffff',
    color: '#3399FF',
    position: "relative",
    height: 'inherit',
    width:'100%',
    padding: theme.spacing(1),    
   
}));

export const StyledTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: '300',
    color: "#3399FF",
    textDecoration: "none",
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        display: 'none'
    },
}))as typeof Link;

export const LogoTitleWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
   display:'flex',
    flexGrow: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'inherit',
    backgroundColor: 'inherit'

}))

export const LogoWrapper = styled(IconButton)(({ theme }: { theme: Theme }) => ({  
    display: 'flex',
    alignItems:'center',
    height: '4rem',
    width: '10rem',
    color: 'inherit',
    position: 'relative',
    margin: 'auto',
    gap:'0.2rem',
      [theme.breakpoints.down('md')]: {
        height: '3rem',
          width: '6rem',
        
    },
      
    [theme.breakpoints.down('sm')]: {
       height: '3rem',
        width: '5rem',
         
    }
}))

// BUTTONS CART, LOGIN STYLING
export const StyledButton = styled('button')
    (({ theme }: { theme: Theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '6rem',
        height: '2rem',
        minWidth: 'fit-content',
        textTransform: 'capitalize',
        backgroundColor: '#ffffff',
        color: '#3399FF',
        borderRadius: '0.2rem',
        border: 'none',
        gap: theme.spacing(0.5),
        
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#f1f1f1',
        },
        '&.stl-btn':{
            [theme.breakpoints.down('md')]:
            {
                color:'#3399FF',
                backgroundColor: 'transparent',
                width: 'fit-content',
            },
        },
        '.cart-btn': {
            ...theme.typography.body1,
            [theme.breakpoints.up('md')]: {
                ...theme.typography.subtitle1,
            },
            [theme.breakpoints.down('sm')]:
            {
                display: 'none',
            }
        },       
    }));

   export const StyledLinks = styled(Link)
    (({ theme }: { theme: Theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.typography.h5,
        gap: theme.spacing(1),
        color:'inherit',
    }));

export const ButtonWrapper = styled(Box)(({ theme }:{theme:Theme}) => ({
    display: 'flex',
    flexGrow: 2,
    justifyContent: 'flex-end',
    gap:'0.4rem',
    [theme.breakpoints.up('sm')]: {
        gap:'1rem', 
    },   
}))

export const StyledMenu = styled(Box)(({ theme }: { theme: Theme }) => ({
      display: 'flex',
    flexGrow: 3,
     justifyContent: 'flex-end',
    color: 'inherit',
    gap: '0.4rem',
    [theme.breakpoints.down('lg')]: {
        display:'none'
    }
}))

export const LargeMenuButtonWrapper = styled(Button)(({ theme }: { theme: Theme }) => ({      
color: 'inherit',
justifyContent: 'center',
alignItems: 'center',
width: '6.5rem',
gap: '0.5rem',
minWidth: 'fit-content',
textTransform: 'capitalize',
}))




