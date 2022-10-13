import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PagesCategories() {
  const [dataApi, setDataApi] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setDataApi(location.state);
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

      <Main>
        {dataApi.map((product) => {
          return (
            <DisplayCards key={product.id}>
              <img src={product.img} alt="" />
              <p> {product.name} </p>
              <span> 1k, {product.price}$ </span>
              <div className="add-card">
                <Link to={`/fruits/${product.id}`} state={product}>
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
  padding: 15px 15px 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: inline-flex;
  }
`;

const Main = styled.main`
  padding: 25px 15px 0;
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
    display: block;
    margin: 0 auto;
    width: 80px;
    height: 80px;
  }

  .add-card {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: var(--background);
    padding-bottom: 2px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: white;

    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export default PagesCategories;
