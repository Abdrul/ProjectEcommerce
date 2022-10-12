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
        const res = await Promise.all([
          axios.get("http://localhost:3000/fruits"),
          axios.get("http://localhost:3000/vegetables"),
        ]);
        const data = res.map((res) => res.data);
        const concat = data.flat();
        setAllProductsApi(concat);
      } catch {
        throw Error("Promise failed");
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
          </WrapperSearch>
        ) : (
          <Nav>
            <Link to="/home">
              <img src={"/images/arrowBack.png"} alt="" />
            </Link>
            <h3>All Products</h3>
            <img
              onClick={handleToggleSearchBar}
              src={"/images/search.png"}
              alt=""
            />
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

const WrapperSearch = styled.section`
  padding: 15px 10px 0;
  text-align: center;
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

    a {
      color: white;
      text-decoration: none;
    }
  }
`;
export default AllProducts;
