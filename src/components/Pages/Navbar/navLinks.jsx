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


export function NavLinks(props) {
  return (

    <LinksWrapper>

      <NavLink draggable="false" style={{fontSize: "2rem", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1,}} to="/">Home</NavLink>

      <NavLink draggable="false" style={{fontSize: "2rem", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1,}} to="/about">About</NavLink>

      <NavLink draggable="false" style={{fontSize: "2rem", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1,}} to="/projects">Projects</NavLink>

      <NavLink draggable="false" style={{fontSize: "2rem", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1,}} to="/Contact">Contact</NavLink>

    </LinksWrapper>

  );
}
