// ContactInfo.tsx
import * as React from 'react';
import { Typography, Box} from '@mui/material';

const ContactInfo: React.FC = () => {
  return (
    
      <Box
        style={{fontFamily:"monospace", height:'100%'}}
      >   
      <Typography variant="h5"
        style={{fontFamily:'monospace'}}
      >Get in touch</Typography>
        <Typography variant="body1">74 E Glenwood Ave</Typography>
        <Typography variant="body1">Suite 5235</Typography>
        <Typography variant="body1">Smyrna, DE 19977</Typography>
      <Typography variant="body1"
        component="a"
        href="mailto:contact@interamerica.capital"
      >contact@interamerica.capital</Typography>
      
      </Box>
     
  );
};

export default ContactInfo;
