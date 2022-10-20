import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [dataApi, setDataApi] = useState([]);
  const [localSto, setLocalSto] = useState([]);

  const handleIncreaseQuantity = (id) => {
    const increaseQuantity = localSto.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(increaseQuantity));
    setLocalSto(increaseQuantity);
  };

  const handleDecreaseQuantity = (id) => {
    const decreaseQuantity = localSto.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(decreaseQuantity));
    setLocalSto(decreaseQuantity);
    deletePoduct(id);
  };

  const deletePoduct = (id) => {
    const findProduct = localSto.find((p) => p.id === id);
    if (findProduct.quantity < 2) {
      const deleteProductId = localSto.filter((p) => p.id !== id);
      setLocalSto(deleteProductId);
      localStorage.setItem("cart", JSON.stringify(deleteProductId));
    }
  };

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const res = await Promise.all([
          axios.get("http://localhost:3000/fruits"),
          axios.get("http://localhost:3000/vegetables"),
        ]);
        const data = res.map((res) => res.data);
        const concat = data.flat();
        setDataApi(concat);
      } catch {
        throw Error("Promise failed");
      }
    };
    fetchNames();
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
          <h3>Cart</h3>
        </Nav>
      </Header>
      <Section>
        {localSto.map((product) => {
          return (
            <DisplayCards key={product.id}>
              <img src={product.img} alt="" />
              <div className="card-content">
                <p> {product.name} </p>
                <span> 1k, {product.price}$ </span>
              </div>
              <form>
                <div
                  onClick={() => handleDecreaseQuantity(product.id)}
                  className="value-button decrease"
                >
                  -
                </div>
                <span>{product.quantity}</span>
                <div
                  onClick={() => handleIncreaseQuantity(product.id)}
                  className="value-button increase"
                >
                  +
                </div>
              </form>
            </DisplayCards>
          );
        })}
        <div className="wrapper-total-price">
          <p>
            Total :{" "}
            <span>
              {localSto.reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.price * currentValue.quantity,
                0
              )}
              $
            </span>
          </p>
        </div>
      </Section>
      <Footer>
        <button>Checkout</button>
      </Footer>
    </>
  );
}

const Header = styled.header`
  padding-top: 15px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 95px;
  align-items: center;
  color: ${(props) => props.theme.titleProduct};

  a {
    padding-left: 15px;
    display: inline-flex;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.titleProduct};
  }
`;

const Section = styled.section`
  height: 85vh;
  padding: 25px 15px 0;

  .wrapper-total-price {
    padding-top: 25px;
    text-align: center;
    p {
      color: ${(props) => props.theme.titleProduct};
      span {
        color: var(--price);
      }
    }
  }
`;

const DisplayCards = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1.5px solid var(--light-background);
  padding: 10px 0px;
  gap: 15px;

  .card-content {
    width: 100%;
    p {
      padding-top: 5px;
      color: ${(props) => props.theme.titleProduct};
    }
    span {
      color: var(--price);
    }
  }

  img {
    object-fit: cover;
    width: 60px;
    height: 60px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;

    .value-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      font-size: 20px;
    }

    .decrease {
      background: ${(props) => props.theme.backgroundCard};
      color: #979899;
    }

    .increase {
      background: var(--background);
      color: white;
    }

    span {
      width: 40px;
      text-align: center;
      color: ${(props) => props.theme.titleProduct};
    }
  }
`;

const Footer = styled.footer`
  padding: 0 15px;
  button {
    width: 100%;
    background: var(--background);
    border: none;
    font-family: "DM Sans", sans-serif;
    border-radius: 50px;
    padding: 15px 0;
    color: white;
    font-size: 18px;
  }
`;

export default Cart;
