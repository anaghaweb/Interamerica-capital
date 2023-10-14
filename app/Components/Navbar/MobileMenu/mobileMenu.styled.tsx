'use client'
import Box from '@mui/material/Box';
import { styled, Theme } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexGrow: 0,
  color: "inherit",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));