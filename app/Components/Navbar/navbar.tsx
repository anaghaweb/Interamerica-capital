'use client'
import * as React from 'react';
import ModernPinkNavbar from './ModernPink';
import ModernBlueNavbar from './ModernBlue';
import ModernPurpleNavbar from './ModernPurple';

import B2BLightNavbar from './B2bNavbarLightBlue';
import BaseNavbar from './BaseNavbar';
import EcoboNavbar from './EcoboNavbar';
import ReharvestNavbar from './ReharvestNavbar';

interface Props{
  variant?: String | undefined;
  settings?: String[];
  mobilemenulist?: String[];
}

export const MobileMenuContext = React.createContext<String[]>([ 'About Us'])
export const SettingsContext = React.createContext<String[]>(['System']);

const Navbar: React.FC<Props> = ({variant, settings, mobilemenulist}) => {
    let Component;
    console.log(variant);
  switch (variant) {
    case 'basic':
      Component = BaseNavbar;
      break;
    case 'b2blight':
      Component = B2BLightNavbar;
      break;
       case 'ecobo':
      Component = EcoboNavbar;
      break;
    case 'reharvest':
      Component = ReharvestNavbar;
      break;
    case 'modernpink':
      Component = ModernPinkNavbar;
      break;
    case 'modernblue':
      Component = ModernBlueNavbar;
      break;
    case 'modernpurple':
      Component = ModernPurpleNavbar;
      break;
      default:
          Component = BaseNavbar;
        
  }
    
  return <React.Fragment>
    <MobileMenuContext.Provider value= {mobilemenulist || [ 'About Us']}>
      <SettingsContext.Provider value={settings || [ 'Brightness'] }>
      <Component />
      </SettingsContext.Provider>
      </MobileMenuContext.Provider>
        </React.Fragment>
    
}

export default Navbar;