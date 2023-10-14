// CompanyLogo.tsx
import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const CompanyLogo: React.FC = () => {
  return (
    <>
      
    <Box className="company-logo" 
        
        style={{
          objectFit: 'contain',
          width: '100%', height: 'auto'
        }}> 
        
        <img src="/interamerica_logo.jpeg"
        alt="Company Logo"    
        style={{objectFit:'contain', width:'100%', height:'100%'}}
      />
      </Box>
      
      <Typography
        className="company-logo"
        variant="h4"
        sx={{ display: 'flex', justifyContent: 'center', fontFamily: "monospace", color: '#3399ff' }}
        ><i>Liquidity in Motion</i></Typography>
     
      </>
  );
};

export default CompanyLogo;
