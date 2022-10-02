import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Fruits() {
  const [dataApi, setDataApi] = useState([]);
  console.log(dataApi);

  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get("http://localhost:3000/fruits");
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
          <h3>Fruits</h3>
          <img src={"/images/search.png"} alt="" />
        </Nav>
      </Header>

      <main>
        {dataApi.map((product) => {
          return (
            <DisplayCards>
              <div key={product.id} className="cart-products">
                <img src={product.imgUrl} alt="" />
                <p> {product.name} </p>
                <span> {product.price} </span>
                <div className="add-card">+</div>
              </div>
            </DisplayCards>
          );
        })}
      </main>
    </>
  );
}

const Header = styled.header`
  margin-top: 15px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 15px;

  .cart-products {
    background: var(--light-background);
    border-radius: 15px;
    padding: 15px;
    position: relative;

    p {
      padding-top: 5px;
      color: var(--title-section);
    }

    span {
      color: var(--price);
    }
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

export default Fruits;
