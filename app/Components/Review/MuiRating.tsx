'use client'
import * as React from 'react'
import { useState } from "react";
import { Rating, Stack, Box, Toolbar, Container, Button, Paper, Typography, IconButton } from '@mui/material';
import { styled, Theme, createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar } from "@mui/material";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 48,
    height: 48,
    backgroundColor: 'transparent',
    color: '#303030',
    display:'flex' 
}));

let Mytheme = createTheme({
    components: {
    MuiRating: {
      styleOverrides: {
        iconFilled: {
              fontSize: '36px',                
        },
        iconEmpty: {
            fontSize: '36px',          
        },
      },
    },
  },
    palette: {
        mode: 'light',
    },
});

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
          color: '#66B2FF',
    },
    
    
});

const MainStar = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#DAE8FC',
    },
    '& .mui-eld1q4': {
        display: 'flex',
        justifyContent:'center'
    }
});

const ReviewBox = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    width: '193px',
    height: '180px',
    backgroundColor: "#DAE8FC",
    border: "3px solid #6C8EBF",   
    '&.customer-review': {
        background: '#ffffff',      
    }
}));

const CustomerReviewBox = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    width: '179px',
    height: '160px',
    backgroundColor: "#DAE8FC",
    border: "3px solid #6C8EBF",    
    '&.customer-review': {
        background: '#ffffff',
        
    }
}));

const ReviewContainer = styled(Container)(({ theme }) => ({  
    backgroundColor: theme.palette.mode === 'dark' ?
        '#fff' : '#F5F5F5',
    display: 'flex',
    justifyContent:'space-around',
    alignItems:'center',
    width: '856px',
    height:'260px',
}))

const MuiReview = () => {
    const [value, setValue] = useState<number | null>(null)
    console.log(value);
    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }

    return (
            
        <ReviewContainer>
            
            <ReviewBox>
                <Box>
                    <Typography variant="h4" component="div" color="#66B2FF">Reviews</Typography>
                </Box>
                 <ThemeProvider theme={Mytheme}>     
                <Stack
                    direction="row"
                    gap="0.2rem"
                    border="1px solid #6C8EBF"
                    bgcolor="#66B2FF"
                    height="80px"
                    width="163px"
                    minWidth="163px"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="3rem"
                    >
                        
                        <Typography variant="h4" color="#fff">{value}</Typography>
                       
                        
                        <MainStar
                        value={value ? value*3/5 : null }
                        max={1}
                        readOnly
                        precision={0.1}   
                            />
                        
                                      
                    </Stack> 
                    
                <StyledRating
                    value={value}
                    
                    max={5}
                    precision={0.1} 
                    readOnly
                    />
                    </ThemeProvider>
            </ReviewBox>
            

            <CustomerReviewBox
                className="customer-review"
            >
                <Stack direction="row"                    
                    width="100%"
                    alignItems="center"
                    justifyContent="flex-start"
                    >
                    <SmallAvatar/>
                    <Typography variant="subtitle1" component="div" fontWeight="500">Customer Name</Typography>
                </Stack>
                      
                <Stack                                    
                    border="2px solid #6C8EBF"
                    bgcolor="#DAE8FC"
                    height="67px"
                    width="140px"
                    alignItems="space-between"
                    justifyContent="flex-start"
                    fontSize="3rem"
                    padding="0.2rem"                  
                >   
                    <Typography component="div" variant="subtitle1" fontWeight={700}>Heading</Typography>
                        <Typography component="div" variant="body2">Review</Typography>  
                    
                                       
                </Stack> 
                <StyledRating
                    value={value}
                    onChange={handleChange}
                    max={5}
                    precision={0.1}
                    color="#787878"
                />
            </CustomerReviewBox>
              <CustomerReviewBox
                className="customer-review"
            >
                <Stack direction="row"
                     
                    width="100%"
                    alignItems="center"
                    justifyContent="flex-start"
                    >
                    <SmallAvatar/>
                    <Typography variant="subtitle1" component="div" fontWeight="500">Customer Name</Typography>
                </Stack>
                      
                <Stack
                    border="2px solid #6C8EBF"
                    bgcolor="#DAE8FC"
                    height="67px"
                    width="140px"
                    alignItems="space-between"
                    justifyContent="flex-start"
                    fontSize="3rem"
                    padding="0.2rem"
                    
                >   
                    <Typography component="div" variant="subtitle1" fontWeight={700}>Heading</Typography>
                        <Typography component="div" variant="body2">Review</Typography>  
                    
                                       
                </Stack> 
                <StyledRating
                    value={value}
                    onChange={handleChange}
                    max={5}
                    precision={0.5}
                    color="#787878"
                />
            </CustomerReviewBox>
              <CustomerReviewBox
                className="customer-review"
            >
                <Stack direction="row"
                     
                    width="100%"
                    alignItems="center"
                    justifyContent="flex-start"
                    >
                    <SmallAvatar/>
                    <Typography variant="subtitle1" component="div" fontWeight="500">Customer Name</Typography>
                </Stack>
                      
                <Stack                                     
                    border="2px solid #6C8EBF"
                    bgcolor="#DAE8FC"
                    height="67px"
                    width="140px"
                    alignItems="space-between"
                    justifyContent="flex-start"
                    fontSize="3rem"
                    padding="0.2rem"                   
                >   
                    <Typography component="div" variant="subtitle1" fontWeight={700}>Heading</Typography>
                        <Typography component="div" variant="body2">Review</Typography>                                        
                </Stack> 
                <StyledRating
                    value={value}
                    onChange={handleChange}
                    max={5}
                    precision={0.5}
                    color="#787878"
                />
            </CustomerReviewBox>         
        </ReviewContainer>
    )
}

export default MuiReview;