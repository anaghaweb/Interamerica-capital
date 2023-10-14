'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { StyledMenu, LargeMenuButtonWrapper } from '../b2blight.styled';


const LargeScreenMenu:React.FC = () => {  
    return <>
                <StyledMenu>
                        <LargeMenuButtonWrapper
                          variant="text">
                            <Typography variant="h5">Products</Typography>
                        </LargeMenuButtonWrapper>
                        <LargeMenuButtonWrapper
                            >                       
                            <Typography variant="h5">About Us</Typography>
                        </LargeMenuButtonWrapper>
                        <LargeMenuButtonWrapper>
                        <img style={{objectFit:'contain', height:'2rem', width:'2rem'}}
                              src="/atlassianDark.png" alt="crowdlogo" />   
                        <Typography variant="h5">For Businesses</Typography>
                        </LargeMenuButtonWrapper>
                      {/* Large screen Menu */}
                </StyledMenu>
                   </>
}

export default LargeScreenMenu;



