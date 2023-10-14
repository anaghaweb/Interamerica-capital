'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase } from './search.styled';

const FullScreenSearchbar:React.FC =()=> {
    return <Box style={
                {
                height: '100vh', width: '100%',
                position: 'absolute', top: '0', left: '0',
                backgroundColor: '#ffffff', zIndex: '98',
                }}>
                <Search
                style={{ width: '100%', backgroundColor: '#f8f8f8' }}
                 >
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    style={{ width: '100%' }}
                    placeholder="Search for Products…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                </Search>
                <Container>
                 <Typography>No recent searches</Typography>
                 </Container>
            </Box>
    }

const SearchAppBar:React.FC=()=> {
    return <Box>
            <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search for Products…"
                inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
            </Box>
}

export {FullScreenSearchbar, SearchAppBar}