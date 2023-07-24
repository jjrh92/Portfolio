import React from 'react'
import styled from '@emotion/styled'
import { ColorsPortfolio } from "../../../colors";
import Avatar from "../../../assets/images/avatar.png"
import "./Landing.css"

const Container = styled ("section") ({

  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: ColorsPortfolio.background2,
  userSelect: "none",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "3rem",
  paddingRight: "3rem",

});


const Title = styled ("h1") ({

    fontSize: "2rem",
    fontWeight: "bold",
    color: ColorsPortfolio.text1,
    paddingTop: "3rem",
    paddingBottom: "2rem",
  
});

const SubTitle = styled ("h1") ({

    fontSize: "1.7rem",
    fontWeight: "bold",
    color: ColorsPortfolio.text1,
    paddingTop: "1rem",
    paddingBottom: "1rem",
  
});

const Text = styled ("p") ({

    fontSize: "2rem",
    color: ColorsPortfolio.text1,
    textAlign: "justify",
    paddingBottom: "2rem",

  
});

const Image = styled ("img") ({

  width: "600px",
  height: "600px",
  paddingBottom: "0.5rem",

});


const Landing = () => {

  return (

    <Container id='Container'>

        <Title id='Title'>My name is Julio!</Title>
        <Image id='Image' className='Image' src={Avatar} draggable="false" alt="Avatar" />
        <SubTitle>Welcome to my Portfolio</SubTitle>
        <Text id='Text'>Front-End developer aiming to create compositions that are aesthetically pleasing for all audiences. You are welcome to explore and test my projects, review the code behind, and if you need help with an idea you can contact me. Have a nice day.</Text>

    </Container>

  )
  
}

export default Landing;