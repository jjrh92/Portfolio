import React from 'react'
import styled from '@emotion/styled'
import { ColorsPortfolio } from "../../../colors";

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
  paddingBottom: "3rem",

});

const Title = styled ("h1") ({

    fontSize: "2rem",
    fontWeight: "bold",
    color: ColorsPortfolio.text1,
    paddingTop: "5rem",
    paddingBottom: "2rem",
  
});


const Text = styled ("p") ({

    fontSize: "2rem",
    color: ColorsPortfolio.text1,
    textAlign: "center",
    paddingBottom: "1rem",
    lineHeight: "3rem",
  
});


const Contact = () => {

  return (

    <Container id='Container'>
      
      <Title id='Title'>Contact</Title>
      <Text id='Text'>Follow the links below for all my socials, or submit a form and send me message instantly.</Text>
      <Text id='Text'>Let's build something great together, send me a message.</Text>


    </Container>

  )
  
}

export default Contact;