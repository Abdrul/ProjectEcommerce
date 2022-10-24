import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function AllProducts() {
  const [allProductsApi, setAllProductsApi] = useState([]);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await axios.get("https://abdrul.github.io/db.json");
        const fruits = response.data.fruits;
        const vegetables = response.data.vegetables;
        const concatDataApi = fruits.concat(vegetables);
        setAllProductsApi(concatDataApi);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNames();
  }, []);

  const handleToggleSearchBar = () => {
    setToggleSearchBar(!false);
  };

  const handleSearchTerm = (e) => {
    const valueInput = e.target.value;
    setSearchTerm(valueInput);
  };

  const handleCloseSearchBar = () => {
    setToggleSearchBar(false);
    setSearchTerm("");
  };

  return (
    <>
      <Header>
        {toggleSearchBar ? (
          <WrapperSearch>
            <input
              type="text"
              placeholder="Search product"
              onChange={handleSearchTerm}
            />
            <button onClick={handleCloseSearchBar}>X</button>
          </WrapperSearch>
        ) : (
          <Nav>
            <Link to="/home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <h3>All Products</h3>
            <svg
              onClick={handleToggleSearchBar}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z"
                clipRule="evenodd"
              />
            </svg>
          </Nav>
        )}
      </Header>

      <Main>
        {allProductsApi
          .filter((product) => {
            return product.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          })
          .map((product) => {
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
  color: ${(props) => props.theme.titleProduct};

  a {
    display: inline-flex;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.titleProduct};
  }
`;

const WrapperSearch = styled.section`
  padding: 15px 10px 0;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    font-family: "DM Sans", sans-serif;
    width: 100%;
    outline: none;
    border: 1px solid var(--background);
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 16px;
    color: var(--title-section);
    &::placeholder {
      color: var(--description);
    }
  }

  button {
    padding: 5px;
    height: 25px;
    width: 25px;
    border: none;
    border-radius: 50%;
    background: ${(props) => props.theme.backgroundCard};
    color: ${(props) => props.theme.titleProduct};
  }
`;

const Main = styled.main`
  padding: 25px 15px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

const DisplayCards = styled.div`
  background: ${(props) => props.theme.backgroundCard};
  border-radius: 15px;
  padding: 10px;
  height: 190px;
  position: relative;

  p {
    padding-top: 5px;
    color: ${(props) => props.theme.titleProduct};
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
export default AllProducts;
