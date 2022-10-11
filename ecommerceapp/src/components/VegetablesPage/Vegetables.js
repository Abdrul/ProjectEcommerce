import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Vegetables() {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get("http://localhost:3000/vegetables");
      const data = response.data;
      setDataApi(data);
    };

    fetchGet();
  }, []);

  return (
    <>
      <Header>
        <Nav>
          <Link to="/home">
            <img src={"/images/arrowBack.png"} alt="" />
          </Link>
          <h3>Vegetables</h3>
          <img src={"/images/search.png"} alt="" />
        </Nav>
      </Header>

      <Main>
        {dataApi.map((product) => {
          return (
            <DisplayCards key={product.id}>
              <img src={product.img} alt="" />
              <p> {product.name} </p>
              <span> 1k, {product.price}$</span>
              <div className="add-card">
                <Link to={`/vegetables/${product.id}`} state={product}>
                  +
                </Link>
              </div>
            </DisplayCards>
          );
        })}
      </Main>
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

const Main = styled.main`
  padding: 25px 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

const DisplayCards = styled.div`
  background: var(--light-background);
  border-radius: 15px;
  padding: 10px;
  height: 190px;
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

  a {
    color: white;
    text-decoration: none;
  }
`;

export default Vegetables;
