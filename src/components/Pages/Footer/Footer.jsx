import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ColorsPortfolio } from "../../../colors";
import "./Footer.css"

const FooterContainer = styled ("footer") ({

  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem 3rem",
  backgroundColor: ColorsPortfolio.background1,
  borderTop: "2px solid",
  borderColor: ColorsPortfolio.hover,
  userSelect: "none",
  gap: "80px",
  

});

const Footer = () => {

  return (

    <FooterContainer id='FooterContainer'>

        <Button draggable="false" className="boton" variant="text" title="LinkedIn" href="https://www.linkedin.com/in/jjrh92/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }}/>
        </Button>

        <Button draggable="false" className="boton" variant="text" title="Github" href="https://www.github.com/jjrh92" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }}/>
        </Button>

        <Button draggable="false" variant="text" title="Telegram" href="https://t.me/jjrh92" target="_blank" rel="noopener noreferrer">
          <TelegramIcon className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }}/>
        </Button>

    </FooterContainer>

  )
  
}

export default Footer