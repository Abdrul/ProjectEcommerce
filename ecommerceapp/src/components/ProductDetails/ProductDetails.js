import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { state } = useLocation();
  const item = state || [];

  return item ? (
    <>
      <Header>
        <Nav>
          <Link to="/fruits">
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
              <div className="value-button decrease">-</div>
              <input type="number" defaultValue={0} id="number" />
              <div className="value-button increase">+</div>
            </form>
          </div>
          <div className="price-description-product">
            <p>{item.price}</p>
            <p>
              Ginger is a flowering plant whose rhizome, ginger root or ginger,
              is widely used as a spice and a folk medicine.
            </p>
          </div>
        </section>
        <section className="third-section">
          <div className="wrapper-details-product">
            <div>
              <img src={"/images/organic.png"} alt="" />
              <span>100%</span>
              <span>Organic</span>
            </div>
            <div>
              <img src={"/images/expiration.png"} alt="" />
              <span>1 Year</span>
              <span>Expiration</span>
            </div>
            <div>
              <img src={"/images/reviews.png"} alt="" />
              <span>4.8</span>
              <span>Reviews</span>
            </div>
            <div>
              <img src={"/images/gram.png"} alt="" />
              <span>80 kcal</span>
              <span>100 Gram</span>
            </div>
          </div>
        </section>
      </Main>

      <footer>
        <button>Add to cart</button>
      </footer>
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

      input#number {
        text-align: center;
        border: none;
        margin: 0;
        width: 50px;
        height: 20px;
        outline: none;
        font-family: "DM Sans", sans-serif;
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
    }
  }
`;

export default ProductDetails;
