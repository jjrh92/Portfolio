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
  height: "100%",
  backgroundColor: ColorsPortfolio.background2,
  userSelect: "none",
  paddingLeft: "3rem",
  paddingRight: "3rem",

});

const Title = styled ("h1") ({

    fontSize: "20px",
    fontWeight: "bold",
    color: ColorsPortfolio.text1,
    paddingTop: "2rem",
    paddingBottom: "2rem",
  
});


const Text = styled ("p") ({

    fontSize: "18px",
    color: ColorsPortfolio.text1,
    textAlign: "center",
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

  fontSize: "20px",
  fontWeight: "bold",
  color: ColorsPortfolio.text1,
  paddingTop: "1rem",
  paddingBottom: "1rem",

});

const IconoImagen = styled ("img") ({

  width: "75px",
  height: "75px",

});

const EducationContainer = styled ("div") ({

  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",


});



const About = () => {

  return (

    <Container id='Container'>
      <SubContainer>
        <Title id='Title'>About me</Title>
          <Text id='Text'>Worked as a Lawyer since 2015. Now pursuing a carreer change I build websites for diverse clients and programming has become my passion. I have always loved working with people and helping them reach their goals. I'm a Venezuelan born and raised and since 2018 I've been living in Santiago, Chile. Programming has given me the chance to learn new skills and rediscover myself as a professional. I consider myself a proactive and open-minded person who is always looking to learn new things and overcome new challenges. My goal is keep growing experience with technology and offer high quality web development services to people and companies. Thank you for visiting my Portfolio.</Text>

          <Title id='Title'>Resume</Title>
          <Button draggable="false" variant="text" title="Click on the button to download my resume" href="https://drive.google.com/file/d/1zpu6fVMFGLL-YX-zEAg8iNvCIfELOZEy/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <ContactPageIcon className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1, paddingBottom: "10px", }}/>
          </Button>
          <SubTitle id='Subtitle'>Toolbox</SubTitle>
          <Skills />

          <Title id='Title'>Education</Title>
          <EducationContainer>
            <Button draggable="false" variant="text" title="FreeCodeCamp" href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
            <IconoImagen draggable="false" src='https://d33wubrfki0l68.cloudfront.net/2f7693e1933ac514c960f51ceae72c91c6716eb2/b2efd/img/fcc_primary_small.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
            </Button>
            <Button draggable="false" variant="text" title="The Odin Project" href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer">
            <IconoImagen draggable="false" src='https://www.theodinproject.com/assets/icons/odin-icon-b5b31c073f7417a257003166c98cc23743654715305910c068b93a3bf4d3065d.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
            </Button>
            <Button draggable="false" variant="text" title="Coderhouse" href="https://www.coderhouse.com/" target="_blank" rel="noopener noreferrer">
            <IconoImagen draggable="false" src='https://plataforma.coderhouse.com/images/icons/svg/coder-logo-round-1.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
            </Button>
            <Button draggable="false" variant="text" title="CodeAcademy" href="https://www.codeacademy.com/" target="_blank" rel="noopener noreferrer">
            <IconoImagen draggable="false" src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Codecademy.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
            </Button>
            <Button draggable="false" variant="text" title="Oracle Next Education" href="https://www.oracle.com/cl/education/oracle-next-education/" target="_blank" rel="noopener noreferrer">
            <IconoImagen draggable="false" src='https://www.aluracursos.com/assets/api/programas/oracle-one.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
            </Button>
            <Button draggable="false" variant="text" title="Alura LATAM" href="https://www.aluracursos.com/" target="_blank" rel="noopener noreferrer">
            <IconoImagen draggable="false" src='https://www.aluracursos.com/assets/img/home/alura-logo.1686744883.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
            </Button>
          </EducationContainer>

      </SubContainer>
    </Container>

  )
  
}

export default About;