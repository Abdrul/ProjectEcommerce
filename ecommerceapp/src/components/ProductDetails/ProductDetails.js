import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { state } = useLocation();
  const item = state || [];

  const [countQuantity, setCountQuantity] = useState(1);
  const [toggleAddToCart, setToggleAddToCart] = useState(false);
  // console.log(countQuantity);

  const handleIncreaseQuantity = () => {
    if (countQuantity > 99) {
      setCountQuantity(99);
    }
    setCountQuantity((countQuantity) => countQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (countQuantity < 1) {
      setCountQuantity(1);
    }

    setCountQuantity((countQuantity) => countQuantity - 1);
  };

  const handleAddToCart = () => {
    setToggleAddToCart(!false);

    setTimeout(() => {
      setToggleAddToCart(false);
    }, "2000");

    const product = {
      quantity: countQuantity,
      id: item.id,
    };

    const basket = JSON.parse(localStorage.getItem("cart")) || [];
    const index = basket.findIndex((el) => el.id === product.id);

    if (index === -1) {
      basket.push(product);
    } else {
      basket[index].quantity += product.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(basket));
  };

  return item ? (
    <>
      <Header>
        <Nav>
          <Link to="/home">
            <img src={"/images/arrowBack.png"} alt="" />
          </Link>
          <img src={"/images/search.png"} alt="" />
        </Nav>
      </Header>

      <Main>
        <section className="first-section">
          <img src={item.img} alt="" />
        </section>
        <section className="second-section">
          <div className="wrapper-selection-quantity">
            <h3>{item.name}</h3>
            <form>
              <div
                onClick={handleDecreaseQuantity}
                className="value-button decrease"
              >
                -
              </div>
              <span>{countQuantity}</span>
              <div
                onClick={handleIncreaseQuantity}
                className="value-button increase"
              >
                +
              </div>
            </form>
          </div>
          <div className="price-description-product">
            <p>1k, {item.price}$</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est qui
              dolores minus sapiente ab praesentium quia fugiat quasi
            </p>
          </div>
        </section>
        <section className="third-section">
          <div className="wrapper-details-product">
            <div className="wrapper">
              <img src={"/images/organic.png"} alt="" />
              <div className="card-content">
                <span>100%</span>
                <span>Organic</span>
              </div>
            </div>
            <div className="wrapper">
              <img src={"/images/expiration.png"} alt="" />
              <div className="card-content">
                <span>Expiration</span>
                <span>1 Year</span>
              </div>
            </div>
            <div className="wrapper">
              <img src={"/images/reviews.png"} alt="" />
              <div className="card-content">
                <span>Reviews</span>
                <span>4.8</span>
              </div>
            </div>
            <div className="wrapper">
              <img src={"/images/gram.png"} alt="" />
              <div className="card-content">
                <span>100 Gram</span>
                <span>80 kcal</span>
              </div>
            </div>
          </div>
        </section>
      </Main>

      <Footer>
        <div>
          <span
            className={
              toggleAddToCart ? "msg-product-add animated" : "msg-product-add"
            }
          >
            The product is added
          </span>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
      </Footer>
    </>
  ) : (
    "salut"
  );
}

const Header = styled.header`
  padding: 15px 25px 0;
  background: var(--light-background);
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
  .first-section {
    background: var(--light-background);
    padding-bottom: 50px;
    border-radius: 0% 0% 50% 50% / 0% 0% 15% 15%;

    img {
      width: 200px;
      object-fit: cover;
      display: block;
      margin: 0 auto;
    }
  }

  .second-section {
    padding: 20px 15px 0;

    .wrapper-selection-quantity {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        color: var(--title-product);
      }
    }

    form {
      display: flex;
      justify-content: center;
      align-items: center;

      .value-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 26px;
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

    .price-description-product {
      padding-top: 15px;

      p {
        &:nth-child(1) {
          color: var(--price);
          font-size: 20px;
          padding-bottom: 15px;
        }

        &:nth-child(2) {
          color: var(--description);
          font-size: 18px;
        }
      }
    }
  }

  .third-section {
    padding: 25px 15px 0;

    .wrapper-details-product {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;

      .wrapper {
        display: flex;
        align-items: center;
        gap: 15px;
        border: 1.5px solid var(--light-background);
        border-radius: 10px;
        padding: 5px 0 5px 5px;

        img {
          width: 30px;
          height: 30px;
        }

        .card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;

          span {
            &:nth-child(1) {
              color: #23aa49;
            }
            &:nth-child(2) {
              color: var(--description);
            }
          }
        }
      }
    }
  }
`;

const Footer = styled.footer`
  padding: 25px 15px 0;
  div {
    display: flex;
    justify-content: center;
    padding-bottom: 15px;

    .msg-product-add {
      background: var(--light-background);
      border-radius: 15px;
      padding: 5px 10px;
      font-size: 14px;
      color: var(--title);
      opacity: 0;
      transform: scale(0);
      transition: all ease-in-out 0.3s;
    }

    .animated {
      transform: scale(1);
      opacity: 1;
    }
  }

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

export default ProductDetails;
