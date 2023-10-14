'use client'
import { styled, Theme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const StyledIconButton = styled(IconButton)(
  ({ theme }: { theme: Theme }) => ({
        padding: "0.2rem",
      color:'inherit',
    [theme.breakpoints.up("sm")]: {
      padding: "0.5rem",
    },
  })
);