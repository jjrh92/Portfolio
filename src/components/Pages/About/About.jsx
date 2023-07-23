import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { ColorsPortfolio } from "../../../colors";
import Skills from './Skills';
import "./About.css"

const Container = styled ("section") ({

  display: "flex",
  flexDirection: "row",
  height: "100vh",
  backgroundColor: ColorsPortfolio.background2,
  userSelect: "none",
  paddingLeft: "3rem",
  paddingRight: "3rem",

});

const Title = styled ("h1") ({

    fontSize: "2rem",
    fontWeight: "bold",
    color: ColorsPortfolio.text1,
    paddingTop: "2rem",
    paddingBottom: "2rem",
  
});


const Text = styled ("p") ({

    fontSize: "2rem",
    color: ColorsPortfolio.text1,
    textAlign: "justify",
    paddingBottom: "1rem",
    lineHeight: "3rem",
  
});

const SubContainer = styled ("div") ({

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "2rem",

});

const SubTitle = styled ("h1") ({

  fontSize: "2rem",
  fontWeight: "bold",
  color: ColorsPortfolio.text1,
  paddingTop: "1rem",
  paddingBottom: "1rem",

});


const About = () => {

  return (

    <Container id='Container'>
      <SubContainer>
        <Title id='Title'>About me</Title>
          <Text id='Text'>Worked as a Lawyer since 2005. Now pursuing a carreer change I build websites for diverse clients and programming has become my passion. I have always loved working with people and helping them reach their goals. I'm a Venezuelan born and raised and since 2018 I've been living in Santiago, Chile. Programming has given me the chance to learn new skills and rediscover myself as a professional. I consider myself a proactive and open-minded person who is always looking to learn new things and overcome new challenges. My goal is keep growing experience with technology and offer high quality web development services to people and companies. Thank you for visiting my Portfolio.</Text>
          <SubTitle id='Subtitle'>Languages and Tools</SubTitle>
          <Skills />
          <Title id='Title'>Resume</Title>

          <Button draggable="false" variant="text" title="Click on the button to start downloading" href="https://drive.google.com/file/d/1zpu6fVMFGLL-YX-zEAg8iNvCIfELOZEy/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <ContactPageIcon className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }}/>
        </Button>

      </SubContainer>
    </Container>

  )
  
}

export default About;