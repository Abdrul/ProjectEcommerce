import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [dataApi, setDataApi] = useState([]);
  const [localSto, setLocalSto] = useState([]);

  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get("http://localhost:3000/fruits");
      const data = response.data;
      setDataApi(data);
    };

    fetchGet();
  }, []);

  useEffect(() => {
    const fetchLocalStorage = () => {
      const basketData = JSON.parse(localStorage.getItem("cart")) || [];
      const basketProducts = basketData.reduce((acc, bp) => {
        const item = dataApi.find((p) => p.id === bp.id);
        if (!item) return acc;
        return [...acc, { ...item, ...bp }];
      }, []);
      setLocalSto(basketProducts);
    };
    fetchLocalStorage();
  }, [dataApi]);

  return (
    <>
      <Header>
        <Nav>
          <Link to="/home">
            <img src={"/images/arrowBack.png"} alt="retour en arriere" />
          </Link>
          <h3>Cart</h3>
          <img src={"/images/search.png"} alt="recherche" />
        </Nav>
      </Header>

      {localSto.map((product) => {
        return (
          <DisplayCards key={product.id}>
            <img src={product.img} alt="" />
            <p> {product.name} </p>
            <span> {product.price} </span>
            <div className="add-card">+</div>
          </DisplayCards>
        );
      })}
    </>
  );
}

const Header = styled.header`
  padding-top: 15px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    display: inline-flex;
  }
`;

const DisplayCards = styled.div`
  background: var(--light-background);
  border-radius: 15px;
  padding: 10px;
  height: 155px;
  position: relative;

  p {
    padding-top: 5px;
    color: var(--title-section);
  }

  span {
    color: var(--price);
  }
  img {
    object-fit: cover;
    width: 80px;
    height: 80px;
  }

  .add-card {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: var(--background);
    padding: 0;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: white;
  }
`;

export default Cart;
