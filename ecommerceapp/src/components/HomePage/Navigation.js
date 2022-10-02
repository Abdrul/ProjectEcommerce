import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.config";
import { Link } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <Footer>
      <Nav>
        <ul>
          <li>
            <Img src={"/images/home.png"} alt="" />
          </li>
          <li>
            <Img src={"/images/all.png"} alt="" />
          </li>
          <li>
            <Img src={"/images/cart.png"} alt="" />
          </li>
          <li>
            <Img src={"/images/profil.png"} alt="" />
          </li>
          <li>
            <Img src={"/images/logout.png"} alt="" onClick={handleLogout} />
          </li>
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
    grid-template-rows: 2fr 1fr;
    justify-items: center;
    align-items: flex-end;

    li {
      list-style-type: none;
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
          padding: 10px;
          width: 40px;
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
