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
  margin-bottom: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Nav = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: flex-end;

    a {
      &:nth-child(1) {
        grid-row-start: 2;
      }
      &:nth-child(2) {
        grid-row-start: 2;
      }
      &:nth-child(3) {
        grid-row-start: 1;
        grid-column-start: 3;
        img {
          object-fit: cover;
          background: var(--background);
          border-radius: 50%;
          padding: 5px;
          width: 30px;
        }
      }
      &:nth-child(4) {
        grid-row-start: 2;
        grid-column-start: 4;
      }
      &:nth-child(5) {
        grid-row-start: 2;
        grid-column-start: 5;
      }
    }
  }
`;

const Img = styled.img`
  width: 24px;
`;

export default Navigation;
