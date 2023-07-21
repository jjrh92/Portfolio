import React from "react";
import styled from "@emotion/styled";
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { ColorsPortfolio } from "../../../colors";

const Container = styled ("div") ({

  display: "flex",
  marginLeft: "20px",
  gap: "30px",

});

export function Accessibility (props) {

  return (

    <Container>

      <TranslateRoundedIcon sx={{color: ColorsPortfolio.text1, fontSize: "2rem",}} />
      <LightModeRoundedIcon sx={{color: ColorsPortfolio.text1, fontSize: "2rem",}} />

    </Container>

  );

}
