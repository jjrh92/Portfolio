import React from "react";
import styled from "@emotion/styled";
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { ColorsPortfolio } from "../../../colors";
import { Button } from "@mui/material";

const Container = styled ("div") ({

  display: "flex",
  marginLeft: "20px",
  gap: "30px",

});

export function Accessibility (props) {

  return (

    <Container>

      <Button draggable="false" className="boton" variant="text" title="Language">
        <TranslateRoundedIcon sx={{color: ColorsPortfolio.text1, fontSize: "2rem",}} />
      </Button>

      <Button draggable="false" className="boton" variant="text" title="Light Mode">
        <LightModeRoundedIcon sx={{color: ColorsPortfolio.text1, fontSize: "2rem",}} />
      </Button>

    </Container>

  );

}
