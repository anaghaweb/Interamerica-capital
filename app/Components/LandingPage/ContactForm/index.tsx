'use client'
import * as React from 'react';
import { Container, Typography, Button, Box } from '@mui/material'
import { StyledTextField } from '../landing.styles';


const ContactForm:React.FC=()=>{
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [contact, setcontact] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)   => {
    e.preventDefault();

    const formData = {
      Date:Date(),
      Name:name,
      Email:email,
      Contact:contact,
      Message:message,
    }
    console.log(formData);
   
    const scriptUrl = 'https://sheet.best/api/sheets/72e23f67-b174-4ad5-b9be-aef7f64a0dc6';

    try {
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
      
      if (response.ok) {
        console.log('Form data submitted successfully');
        setName('');
        setEmail('');
        setMessage('');
        setcontact('');
      } else {
        console.error('Form data submission failed');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
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
          <label htmlFor="name">Name:</label>
          <StyledTextField
            label="Name"
            name="Name"
            placeholder="Name"
            fullWidth
            required
            className="field"
            type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
          sx={{display: 'flex', flexGrow: 1,my:'0.5rem'}}/>
        </Box>
        <Box className="form-group">
          <label htmlFor="email">Email:</label>
          <StyledTextField
            type="email"
            id="email"
            label="email"
            placeholder="Email ID"
            name="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          sx={{display: 'flex', flexGrow: 1, my:'0.5rem'}}
          />
        </Box><Box className="form-group">
          <label htmlFor="Contact No.">contact:</label>
          <StyledTextField
            type="tel"
            id="contact"
            label="phone"
            placeholder="Your phone number"
            name="contact"
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
          sx={{display: 'flex', flexGrow: 1, my:'0.5rem'}}
          />
        </Box>
        <Box className="form-group">
          <label htmlFor="message">Message:</label>
          <StyledTextField
            id="message"
            value={message}
            label="message"
            name="M essage"
            placeholder="your message here"
            multiline
            rows={2}
            onChange={(e) => setMessage(e.target.value)}
            sx={{display: 'flex', flexGrow: 1,my:'0.5rem'}}
          />
        </Box>
        <Button type="submit" variant="outlined"
          sx={{ display: 'flex', width:'100%' }}
        >Submit
        </Button>
      </form>
    </Container >
  );
};

export default ContactForm;
