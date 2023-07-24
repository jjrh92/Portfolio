import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { ColorsPortfolio } from "../../../colors";


const LinksWrapper = styled ("div") ({

  height: "100%",
  padding: "0 1.1em",
  alignItems: "center",
  display: "flex",
  gap: "200px",
  marginLeft: "50px",

});


export function NavLinks (props) {

  return (

    <LinksWrapper>

      <NavLink title="Home" draggable="false" style={{fontSize: "20px", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1,}} to="/">Home</NavLink>

      <NavLink title="About" draggable="false" style={{fontSize: "20px", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1,}} to="/about">About</NavLink>

      <NavLink title="Projects" draggable="false" style={{fontSize: "20px", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1,}} to="/projects">Projects</NavLink>

      <NavLink title="Contact" draggable="false" style={{fontSize: "20px", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1,}} to="/contact">Contact</NavLink>

    </LinksWrapper>

  );
}
