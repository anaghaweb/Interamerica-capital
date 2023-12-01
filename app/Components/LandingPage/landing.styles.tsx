'use client'
import { Paper, TextField, Box } from "@mui/material";
import {styled, Theme} from "@mui/material/styles"

export const StyledTextField = styled(TextField)(({ theme }: { theme: Theme }) => ({  
    display: 'flex',
    flexGrow: 1,
    '&.field': {
        marginTop: '0.5rem',
        marginBottom:'0.5rem',
        fontWeight:'500'
    },    
}))

export const ContactLogoWrapper = styled(Paper)(({ theme }) => ({   
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'auto',
    padding: '1rem',
    '& .company-logo':{
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.3rem',
            padding:'0'           
        }
    }    
}))

export const ContactsWrapper = styled(Paper)(({ theme }) => ({  
    display: 'flex', 
    flexDirection:'column',
    flexGrow: 1,
    justifyContent: 'flex-start',
    flexBasis:'50%',
    alignItems: 'center',
    height: '33rem',
    padding: '1rem',
    fontFamily: 'monospace',
    lineHeight: '0.4rem',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        padding:'0'
     }   
}))

export const ContactFormWrapper = styled(Paper)(({ theme }) => ({
    
    display: 'flex', 
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis:'50%',
    padding: '1rem',
    height: '33rem',
    [theme.breakpoints.down('md')]: {
         width:'100%',
         padding:'0',
     }
}))

export const LandingWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '100%',
    width: '70%',
    maxWidth:'900px',
    justifyContent: 'center',
    alignItems:'center',
    margin: '0 auto',
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        width:'100%',
        padding: '0',
        margin:'1rem 0',
     }
}))