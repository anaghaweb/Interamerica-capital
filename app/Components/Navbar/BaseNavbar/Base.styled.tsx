"use client";
import { styled, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";

export const StyledAppBar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  height: '3rem',
  
    [theme.breakpoints.up('md')]: {
        height:'5rem'
    },    
     '*:visited':{
    color: 'inherit',
    }, 
     
}));

export const StyledToolbar = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
  backgroundColor: "#FFFFFF",
  color: "#3399FF",
  height: 'inherit',
  padding: '0.5rem',
  
  position: "relative",
  "*": {
    textDecoration: "none",
    boxSizing: "border-box",
  },
  "*:visited": {},
}));

export const Filler = styled(Box)(({ theme }:{theme:Theme}) => ({
  
  display: 'flex',
  flexGrow:1

}))

export const StyledTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
  display: "flex",
    justifyContent: "flex-start",
  flexGrow: 1,
    marginLeft:'0.5rem',
    fontFamily: "inherit",
    fontWeight: 500,
    color: "inherit",
    textDecoration: "none",
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        ...theme.typography.h6,
        padding: "0",
    },
}))as typeof Link;

