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
  flexDirection: "row",
  justifyContent: "center",
  userSelect: "none",
  paddingLeft: "3rem",
  paddingRight: "3rem",

});

const CategoryContainer = styled ("div") ({

  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  padding: "2rem",
  backgroundColor: ColoresJulioFood.fondo,

});

const ProjectContainer = styled ("section") ({

  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
  gap: "5px",
  width: "100%",

});



const Projects = () => {

  return (

    <Container id='Container'>
      <Title id='Title'>Projects</Title>
      <Text id='Text'>If you want to get in touch please go to the Contact page.</Text>
      <SubContainer>
      <Text id='Text'>Feelance Projects</Text>
      </SubContainer>

    </Container>

  )
  
}

export default Projects;