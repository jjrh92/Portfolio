import React from 'react'
import styled from '@emotion/styled'
import Form from './Form';
import { ColorsPortfolio } from "../../../colors";
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled ("section") ({

  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  height: "100vh",
  backgroundColor: ColorsPortfolio.background2,
  userSelect: "none",
  paddingLeft: "3rem",
  paddingRight: "3rem",
  paddingBottom: "2rem",

});

const Title = styled ("h1") ({

    fontSize: "20px",
    fontWeight: "bold",
    color: ColorsPortfolio.text1,
    paddingTop: "5rem",
    paddingBottom: "2rem",
  
});


const Text = styled ("p") ({

  fontSize: "20px",
  color: ColorsPortfolio.text1,
  textAlign: "center",
  display: "flex",
  paddingBottom: "1rem",
  
});

const ContactContainer = styled ("div") ({

  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "1rem",
  paddingBottom: "2rem",


});

const Contact = () => {

  return (

    <Container id='Container'>
      
      <Title id='Title'>Contact</Title>
      <ContactContainer>
        <Button draggable="false" variant="text" title="Send me an Email" href="mailto:juliojesusreyes@gmail.com" target="_blank" rel="noopener noreferrer">
        <EmailIcon draggable="false" className="button" sx={{ fontSize: "3rem", height: "60px", width: "60px", color: ColorsPortfolio.text1 }} />
        </Button>
        <Button draggable="false" variant="text" title="Send me an Email" href="https://t.me/jjrh92" target="_blank" rel="noopener noreferrer">
        <TelegramIcon draggable="false" className="button" sx={{ fontSize: "3rem", height: "60px", width: "60px", color: ColorsPortfolio.text1 }} />
        </Button>
        <Button draggable="false" variant="text" title="Send me an Email" href="https://linkedin.com/in/jjrh92" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon draggable="false" className="button" sx={{ fontSize: "3rem", height: "60px", width: "60px", color: ColorsPortfolio.text1 }} />
        </Button>
        <Button draggable="false" variant="text" title="Send me an Email" href="https://github.com/jjrh92" target="_blank" rel="noopener noreferrer">
        <GitHubIcon draggable="false" className="button" sx={{ fontSize: "3rem", height: "60px", width: "60px", color: ColorsPortfolio.text1 }} />
        </Button>
      </ContactContainer>
      <Text id='Text'>Follow the links above to visit my socials, or submit the following form to send me message.</Text>

      <Form />
      <Text id='Text'>Thank you for visiting my portfolio.</Text>



    </Container>

  )
  
}

export default Contact;