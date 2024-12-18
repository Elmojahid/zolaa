import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom';
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
//import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import logoImage from "../../assets/img/Logo.png";  

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <ScrollLink className="pointer flexNullCenter" to="home" smooth={true}>
            <img src={logoImage} alt="Logo" style={{ height: "40px", width: "auto" }} />
          </ScrollLink>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
          <li className="semiBold font15 pointer">
              <Link to="/" style={{ padding: "10px 15px" }}>
                 Accueil
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <ScrollLink activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Nos Produits
              </ScrollLink>
            </li>
            <li className="semiBold font15 pointer">
              <ScrollLink activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
               Nos Services
              </ScrollLink>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/about" style={{ padding: "10px 15px" }}>
                 À propos
              </Link>
            </li>
            <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link to="/Contacts" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Contactez-Nous
              </Link>
            </li>
            </UlWrapperRight>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;