import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "./responsive";
import { MobileNavLinks } from "./mobileNavLinks";
import { ColorsPortfolio } from "../../../colors";
import "./Navbar.css"

const NavbarContainer = styled ("header") ({

    height: "80px",
    display: "flex",
    alignItems: "center",
    padding: "1rem 3rem",
    backgroundColor: ColorsPortfolio.background1,
    userSelect: "none",
    position: "sticky",
    borderBottom: "1.4px solid",
    borderColor: ColorsPortfolio.hover,

});

const LeftandRightSections = styled ("div") ({

    display: "flex",

});

const MiddleSection = styled ("div") ({

    display: "flex",
    flex: "2",
    height: "100%",
    justifyContent: "center",

});

export function Navbar (props) {

    const isMobile = useMediaQuery ({ maxWidth: DeviceSize.mobile });

    return (

        <NavbarContainer id="NavbarContainer">
            <LeftandRightSections>
                <Link draggable="false" style={{fontSize: "3rem", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1,}} to="/">JR</Link>
            </LeftandRightSections>
            <MiddleSection>{!isMobile && <NavLinks/>}</MiddleSection>
            <LeftandRightSections>
                {!isMobile && <Accessibility/>}
                {isMobile && <MobileNavLinks/>}
            </LeftandRightSections>
        </NavbarContainer>

    );
    
}

export default Navbar;