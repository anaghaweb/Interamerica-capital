'use client'
import * as React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import SettingsMenu from '../SettingsMenu';
import { StyledTitle, LogoTitleWrapper,  LogoWrapper, StyledButton, StyledLinks, ButtonWrapper,StyledToolbar, StyledAppBar } from './b2blight.styled';
import MobileMenu from '../MobileMenu';
import LargeScreenMenu from './LargeScreenMenu/largeScreenMenu';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Image from 'next/image';

 
function B2BLightNavbar() { 
    return (
            <StyledAppBar
            position="static"                        
        >
            <Container maxWidth="xl"
                disableGutters
                style={{height:'inherit'}}
            >
                <StyledToolbar
                    disableGutters                 
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
                        <StyledTitle
                            variant="h4"
                            noWrap
                            component="a"
                            href="/"                           
                        >B2B</StyledTitle>
                    </LogoTitleWrapper>
                    {/* LARGE SCREEN MENU */}
                    <LargeScreenMenu />    
                    
                    {/* LOGIN & CART BUTTONS */}
                     <ButtonWrapper>                             
                        <StyledButton className="stl-btn">                                                   <StyledLinks className="stl-btn" href="#"><ShoppingCartRoundedIcon /><Box className="cart-btn">
                                    Cart</Box></StyledLinks>
                        </StyledButton>
                        <StyledButton className="stl-btn">
                            <StyledLinks className="stl-btn" href="#"> <LoginOutlinedIcon />
                                <Box className="cart-btn">Login</Box></StyledLinks>
                        </StyledButton>
                    </ButtonWrapper>
                    {/* SETTINGS MENU */}            
                    <SettingsMenu iconColor='#787878'/>                                     
                </StyledToolbar>
            </Container>
        </StyledAppBar >        
    )   
}
export default B2BLightNavbar;
