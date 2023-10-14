import { StyledAppBar } from './Base.styled';
import Container from '@mui/material/Container';
import SettingsMenu from '../SettingsMenu';
import {StyledTitle, StyledToolbar, Filler } from './Base.styled';
import MobileMenu from '../MobileMenu';

const settings = ['System', 'Brightness', 'Installation', "changes", "components"];

const BaseNavbar:React.FC =()=> {     
    return (  
         <StyledAppBar
            position="static"               
          >
            <Container maxWidth="xl"
                style={{height:'inherit'}}
                disableGutters                
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
                            Base
                    </StyledTitle>
                    <Filler>
                        </Filler>
                                                           
                    {/* SETTINGS MENU */}            
                    <SettingsMenu iconColor="#787878" />   
                                                   
                </StyledToolbar>
            </Container>
        </StyledAppBar >        
    )       
}
export default BaseNavbar;
