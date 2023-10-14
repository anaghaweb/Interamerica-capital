import { StyledAppBar } from './ecobo.styled';
import Container from '@mui/material/Container';
import SettingsMenu from '../SettingsMenu';
import {StyledTitle, StyledToolbar, Filler } from './ecobo.styled';
import MobileMenu from '../MobileMenu';

function EcoboNavbar(): JSX.Element {     
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
                   
                        <StyledTitle
                            variant="h4"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                        >
                            {/* NAVBAR TITLE */}
                            Ecobo
                        </StyledTitle>
                        <Filler></Filler>
                                                           
                    {/* SETTINGS MENU */}            
                    <SettingsMenu  iconColor="#787878"/>                                      
                </StyledToolbar>
            </Container>
        </StyledAppBar >        
    )       
}
export default EcoboNavbar;
