import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [dataApi, setDataApi] = useState([]);
  const [localSto, setLocalSto] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    const calculTotalPrice = localSto.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.quantity,
      totalPrice
    );
    setTotalPrice(calculTotalPrice);
  }, [localSto]);

  const deletePoduct = (id) => {
    const findProduct = localSto.find((p) => p.id === id);
    if (findProduct.quantity < 2) {
      const deleteProductId = localSto.filter((p) => p.id !== id);
      setLocalSto(deleteProductId);
      localStorage.setItem("cart", JSON.stringify(deleteProductId));
    }
  };

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
      </Section>
      <Section>
        <div>
          <span> {totalPrice} </span>
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
  gap: 70px;
  align-items: center;
  a {
    padding-left: 25px;
    display: inline-flex;
  }
`;

const Section = styled.section`
  /* height: 85vh; */
  padding-top: 25px;
`;

const DisplayCards = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1.5px solid var(--light-background);
  padding: 10px 5px;
  gap: 15px;

  .card-content {
    width: 100%;
    p {
      padding-top: 5px;
      color: var(--title-section);
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
      background: var(--light-background);
      color: #979899;
    }

    .increase {
      background: var(--background);
      color: white;
    }

    span {
      width: 40px;
      text-align: center;
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
