import React from "react";
import styled from "@emotion/styled";
import { ColorsPortfolio } from "../../../colors";
import { Button } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled ("div") ({

  display: "flex",
  marginLeft: "20px",
  gap: "30px",

});

export function Accessibility (props) {

  return (

    <Container>

      <Button draggable="false" className="boton" variant="text" title="LinkedIn" href="https://www.linkedin.com/in/jjrh92/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }}/>
      </Button>

      <Button draggable="false" className="boton" variant="text" title="Github" href="https://www.github.com/jjrh92" target="_blank" rel="noopener noreferrer">
        <GitHubIcon className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }}/>
      </Button>

    </Container>

  );

}
