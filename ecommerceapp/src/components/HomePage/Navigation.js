import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.config";
import { Link } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const [countProductsCart, setCountProductsCart] = useState(0);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  useEffect(() => {
    const basketData = JSON.parse(localStorage.getItem("cart")) || [];
    setCountProductsCart(basketData.length);
  }, []);

  return (
    <Footer>
      <Nav>
        <ul>
          <Link>
            <Img src={"/images/home.png"} alt="" />
          </Link>
          <Link to="/allProducts">
            <Img src={"/images/all.png"} alt="" />
          </Link>
          <Link to="/cart" className="cart">
            <Img src={"/images/cart.png"} alt="" />
            <span> {countProductsCart} </span>
          </Link>
          <Link to="/profil">
            <Img src={"/images/profil.png"} alt="" />
          </Link>
          <Link>
            <Img src={"/images/logout.png"} alt="" onClick={handleLogout} />
          </Link>
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

    a {
      text-decoration: none;
      &:nth-child(1) {
        grid-row-start: 2;
      }
      &:nth-child(2) {
        grid-row-start: 2;
      }
      &:nth-child(3) {
        grid-row-start: 1;
        grid-column-start: 3;
        position: relative;

        img {
          object-fit: cover;
          background: var(--background);
          border-radius: 50%;
          padding: 10px;
          width: 40px;
        }

        span {
          background: var(--price);
          color: white;
          border-radius: 10px;
          font-size: 14px;
          padding: 1px 5px;
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
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
