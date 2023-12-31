'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import SettingsMenu from '../SettingsMenu';
import { StyledTitle, LogoTitleWrapper,  LogoWrapper, StyledToolbar, StyledAppBar } from './b2blight.styled';
import MobileMenu from '../MobileMenu';
import { Inter } from 'next/font/google';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})


 const Offset = styled('div')(({ theme }) =>
    theme.mixins.toolbar);

function B2BLightNavbar() { 
    return (
        <>
            <StyledAppBar
                position="sticky" 
            elevation={1}   
        >
                <Container 
                maxWidth={false}
                disableGutters
                style={{height:'inherit'}}
            >
                <StyledToolbar
                    disableGutters 
                    className={`${inter.variable}`}
                >
                    <MobileMenu />
                    {/* LOGO AND TITLE */}
                    <LogoTitleWrapper>
                        <LogoWrapper
                            aria-label="logo of interamerica"
                            aria-controls="menu-appbar">                           
                             <img
                            src="/interamerica_logo.jpeg"
                            alt="Interamerica Capital Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', top: '0',
                                 bottom: '0', position: 'absolute', margin:'auto'
                            }}
                             
                            />
                        </LogoWrapper>
                        
                    </LogoTitleWrapper>
                    {/* LARGE SCREEN MENU */}
                                
                    
                    {/* LOGIN & CART BUTTONS */}
                    
                    {/* SETTINGS MENU */}            
                                                        
                </StyledToolbar>
            </Container>
            </StyledAppBar > 
            
        </>    
    )   
}
export default B2BLightNavbar;
