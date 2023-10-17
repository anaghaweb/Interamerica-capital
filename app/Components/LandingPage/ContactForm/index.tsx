'use client'
import * as React from 'react';
import { Container, Button, Box } from '@mui/material'
import { StyledTextField } from '../landing.styles';
import CustomSnackbar from '../Mui-components/Snackbar';
import axios from 'axios';

const ContactForm: React.FC = () => {
  
  const [firstname, setFirstName] = React.useState<string>('');
  const [lastname, setLastName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [message, setMessage] = React.useState<any>('');
  const [subject, setSubject] = React.useState<any>('');
  const [firstNameFocused, setFirstNameFocused] = React.useState(false);
  const [lastNameFocused, setLastNameFocused] = React.useState(false);
  const [emailFocused, setEmailFocused] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState<string>('');
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<'success' | 'error' | 'warning' | 'info'>('success');

  
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                     
  const nameRegex = /.+/;

   const handleFirstNameFocus = () => {
    setFirstNameFocused(!firstNameFocused);
  };

   const handleLastNameFocus = () => {
    setLastNameFocused(!lastNameFocused);
  };

   const handleEmailFocus = () => {
    setEmailFocused(!emailFocused);
  };
    
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
           
    const currentDate = new Date().toLocaleDateString('en-US', {timeZone: 'America/Los_Angeles'})
    console.log(currentDate);
    
    const formData = {
      Date:currentDate,
      FirstName:firstname,
      LastName:lastname,
      Email:email,
      Subject:subject,
      Message:message,
    }
    
    const jsondata = JSON.stringify(formData);
    // const scriptUrl = 'https://sheet.best/api/sheets/2aa0fa39-6506-4b60-88b1-c6e8f48157fb';
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyvzFr6ngaCjOhZQeJWyD5iFSNU3l3qS9sGZkJcb9bNRvsc_ZBmE60WdjxjHJhK8486/exec';

    try {

      axios.post(scriptUrl, jsondata).then(response => {
        response.data
        
        if (response) {
          console.log(response);
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
          setSubject('');
          setSnackbarMessage('Your Message was submitted sucessfully! We will get back to you shortly');
          setSnackbarSeverity('success');
          setOpenSnackbar(true);
       
        } else {
          console.error('Form data submission failed');
          setSnackbarMessage('Form data submission failed');
          setSnackbarSeverity('error');
          setOpenSnackbar(true);
        }
      })
    }
    catch (error) {
      console.error('Error submitting form data:', error);
      setSnackbarMessage('Error submitting form data');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
   };
  return (
    <Container className="contact-form"
      sx={{my:'0.5rem', fontFamily:"monospace"}}
    >
      <form    
        noValidate 
        autoComplete="off"
        onSubmit={handleSubmit}>   
        <Box className="form-group">
          {/* <label htmlFor="name">Name:</label> */}
          <StyledTextField
            label="First Name"
            name="firstname"
            placeholder="First Name"
            fullWidth
            required
            className="field"
            type="text" id="firstname" value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            onFocus={handleFirstNameFocus}
            onBlur={handleFirstNameFocus}
            
              error={firstNameFocused && !nameRegex.test(firstname)}
          />
        </Box>
        <Box className="form-group">
          {/* <label htmlFor="name">Name:</label> */}
          <StyledTextField
            label="Last Name"
            name="lastname"
            placeholder="Last Name"
            fullWidth
            required
            className="field"
            type="text" id="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)}
            onFocus={handleLastNameFocus}
            onBlur={handleLastNameFocus}
            error={lastNameFocused && !nameRegex.test(lastname)}
          />
        </Box>
        <Box className="form-group">
          {/* <label htmlFor="email">Email:</label> */}
          <StyledTextField
            type="email"
            id="email"
            label="Email ID"
            placeholder="Email ID"
            name="email"
            value={email}
            required
            className="field"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleEmailFocus}
            onBlur={handleEmailFocus}
            helperText={(!emailRegex.test(email) && emailFocused) ? "Enter a valid email ID" : ""}
              error={!emailRegex.test(email) && emailFocused}
            
            
              
          />
        </Box><Box className="form-group">
          {/* <label htmlFor="Contact No.">Subject:</label> */}
          <StyledTextField
            type="text"
            id="contact"
            label="Subject"
            placeholder="Subject Title"
            
            value={subject}
            className="field"
            onChange={(e) => setSubject(e.target.value)}
          
          />
        </Box>
        <Box className="form-group">
          {/* <label htmlFor="message">Message:</label> */}
          <StyledTextField
            id="message"
            value={message}
            label="Your Message"
            name="contactForm"
            placeholder="your message here"
            multiline
            rows={2}
            onChange={(e) => setMessage(e.target.value)}
            className="field"
           
          />
        </Box>
        <Button type="submit" variant="outlined"
          style={{ display: 'flex', width:'100%' }}
          disabled={!firstname || !lastname || !emailRegex.test(email)}

        >Submit
        </Button>
      </form>
        <CustomSnackbar
        open={openSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleCloseSnackbar}
      />
    </Container >
  );
};

export default ContactForm;
