import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
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

      <Button draggable="false" variant="text" title="Send me an Email" href="mailto:juliojesusreyes@gmail.com" target="_blank" rel="noopener noreferrer">
        <EmailIcon className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }}/>
      </Button>

    </FooterContainer>

  )
  
}

export default Footer