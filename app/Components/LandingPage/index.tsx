import * as React from 'react';
import CompanyLogo from './CompanyLogo';
import ContactForm from './ContactForm';
import ContactInfo from './Contactinfo';
import { ContactLogoWrapper, ContactFormWrapper, LandingWrapper, ContactsWrapper} from './landing.styles';

const LandingPage: React.FC = () => {
  return (
    <>
      <LandingWrapper>
      <ContactsWrapper>
      <ContactLogoWrapper className="left">  
            <CompanyLogo />
          </ContactLogoWrapper>  
        <ContactLogoWrapper className="left">   
              <ContactInfo />      
          </ContactLogoWrapper>
          </ContactsWrapper>
        <ContactFormWrapper className="right">      
          <ContactForm />   
        </ContactFormWrapper>
        </LandingWrapper>
    </>
    
  )
};

export default LandingPage;