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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </Link>
          <Link to="/allProducts">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M16.5 6a3 3 0 00-3-3H6a3 3 0 00-3 3v7.5a3 3 0 003 3v-6A4.5 4.5 0 0110.5 6h6z" />
              <path d="M18 7.5a3 3 0 013 3V18a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3H18z" />
            </svg>
          </Link>
          <Link to="/cart" className="cart">
            <Img src={"/images/cart.png"} alt="" />
            <span> {countProductsCart} </span>
          </Link>
          <Link to="/profil">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link onClick={handleLogout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </ul>
      </Nav>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  padding-top: 20px;
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

      svg {
        width: 26px;
        height: 26px;
        fill: ${(props) => props.theme.titleProduct};
      }

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
