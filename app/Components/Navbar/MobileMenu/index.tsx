'use client'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledBox } from './mobileMenu.styled';
import { MobileMenuContext } from '../navbar';
import Link from 'next/link';


export default function MobileMenu(): JSX.Element {
   
 const mobilemenulist = React.useContext(MobileMenuContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };
   
    return <>
        <MobileMenuContext.Provider value={mobilemenulist || [{
    name: 'About Us',
    link: '/'
  }]}>
            
             <StyledBox>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            style={{ padding: '0.5rem' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                            }}                           
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                    {mobilemenulist.map(( page, index ) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Link key={index} href="/"><Typography textAlign="center">{page}</Typography></Link>
                                    
                                </MenuItem>
                            ))}
                        </Menu>
            </StyledBox>  
            </MobileMenuContext.Provider>
    </>
}