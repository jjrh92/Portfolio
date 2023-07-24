import React, { useState } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { ColorsPortfolio } from "../../../colors";
import Footer from "../Footer/Footer";

const NavLinksContainer = styled ("div") ({

  height: "100%",
  display: "flex",
  alignItems: "center",

});

const LinksWrapper = styled ("div") ({
  paddingTop: "120px",
  paddingLeft: "25px",
  display: "flex",
  height: "100%",
  listStyle: "none",
  backgroundColor: ColorsPortfolio.background1,
  width: "100%",
  flexDirection: "column",
  position: "fixed",
  top: "100px",
  left: "0",
  gap: "15px",

});

const Marginer = styled ("div") ({

  height: "1em",

});

export function MobileNavLinks (props) {

  const [isOpen, setOpen] = useState (false);

  return (

    <NavLinksContainer>
    <MenuToggle isOpen={isOpen} toggle={() => setOpen (!isOpen)}  />

      {isOpen && (

        <LinksWrapper>

          <NavLink title="Home" draggable="false" style={{fontSize: "2rem", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1, paddingLeft: "1.5rem"}} to="/">Home</NavLink>
          <NavLink title="About" draggable="false" style={{fontSize: "2rem", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1, paddingLeft: "1.5rem"}} to="/about">About</NavLink>
          <NavLink title="Projects" draggable="false" style={{fontSize: "2rem", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1, paddingLeft: "1.5rem"}} to="/projects">Projects</NavLink>
          <NavLink title="Contact" draggable="false" style={{fontSize: "2rem", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1, paddingLeft: "1.5rem"}} to="/contact">Contact</NavLink>

          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}

    </NavLinksContainer>

  );

}