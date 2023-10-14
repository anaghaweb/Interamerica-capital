'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FullScreenSearchbar, SearchAppBar } from '../CustomSearchField';
import SettingsMenu from '../SettingsMenu';
import {StyledTitle, LogoTitleWrapper, LogoWrapper, StyledToolbar, StyledAppBar,
CancelButtonWrapper, SearchButtonWrapper} from './Modern.styled';
import MobileMenu from '../MobileMenu';

const ModernPurpleNavbar:React.FC=()=>{
    const [search, setSearch] = React.useState(false)
    const handleSearchBar = () => {
        setSearch(!search);
    }
    return (       
         <StyledAppBar
            position="static">  
            <Container maxWidth="xl"
                disableGutters
                style={{ height: 'inherit' }}>
                <StyledToolbar disableGutters >
                    <MobileMenu />
                    {/* LOGO AND TITLE */}
                    <LogoTitleWrapper>                                         
                        <LogoWrapper
                            aria-label="logo of ModernPurple"
                            aria-controls="menu-appbar"
                            color="inherit">
                            <InsertPhotoSharpIcon
                                sx={{ height: '100%', width: '100%', mr: 1 }} />
                        </LogoWrapper>
                        <StyledTitle
                            variant="h4"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu">
                                                   
                            {/* NAVBAR TITLE */}
                            Modern
                        </StyledTitle>
                    </LogoTitleWrapper>
   
                    {/* SEARCH FIELD */}
                    <Box sx={{ display: { xs: 'none', lg: 'flex', flexGrow: 1, justifyContent: 'flex-end' } }}>
                        <SearchAppBar />
                    </Box>
                    {search && <FullScreenSearchbar />}
                    {search && <CancelButtonWrapper
                        variant="outlined"
                        onClick={handleSearchBar}
                        >
                        Cancel
                    </CancelButtonWrapper>}                  
                    {/* SEARCH ICON */}
                        <SearchButtonWrapper
                            variant="text"
                            onClick={handleSearchBar}
                    >
                         <SearchOutlinedIcon />
                    </SearchButtonWrapper>                     
                    {/* SETTINGS MENU */}            
                        <SettingsMenu iconColor='#787878' />                                      
                </StyledToolbar>
            </Container>
        </StyledAppBar >        
    )
}

export default ModernPurpleNavbar;
