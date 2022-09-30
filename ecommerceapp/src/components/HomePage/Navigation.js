import React from "react";
import styled from "styled-components";

function Navigation() {
  return (
    <Footer>
      <Nav>
        <ul>
          <a href="">
            <Img src={"/images/home.png"} alt="" />
          </a>
          <a href="">
            <Img src={"/images/all.png"} alt="" />
          </a>
          <a href="">
            <Img src={"/images/cart.png"} alt="" />
          </a>
          <a href="">
            <Img src={"/images/profil.png"} alt="" />
          </a>
          <a href="">
            <Img src={"/images/logout.png"} alt="" />
          </a>
        </ul>
      </Nav>
    </Footer>
  );
}

const Footer = styled.footer`
  /* margin-bottom: 5px; */
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 24px;
`;

export default Navigation;
