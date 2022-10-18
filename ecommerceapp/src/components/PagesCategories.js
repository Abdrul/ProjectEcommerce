import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PagesCategories() {
  const [dataApi, setDataApi] = useState([]);
  const location = useLocation();
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setDataApi(location.state);
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
        {dataApi
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

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.titleProduct};
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

export default PagesCategories;
