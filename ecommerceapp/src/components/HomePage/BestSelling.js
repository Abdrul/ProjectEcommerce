import React from "react";
import styled from "styled-components";

function BestSelling() {
  return (
    <Section>
      <WrappedTitle>
        <h3>
          Best selling<span>🔥</span>
        </h3>
        <span>See all</span>
      </WrappedTitle>
      <DisplayCards>
        <div className="cart-products">
          <img src={"/images/paprika.png"} alt="" />
          <p>Bell Pepper Red</p>
          <span>1kg, 4$</span>
          <div className="add-card">+</div>
        </div>
        <div className="cart-products">
          <img src={"/images/steak.png"} alt="" />
          <p>Bell Pepper Red</p>
          <span>1kg, 4$</span>
          <div className="add-card">+</div>
        </div>
      </DisplayCards>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 35px;
`;

const WrappedTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme.titleProduct};

    span {
      padding-left: 5px;
    }
  }

  span {
    color: #23aa49;
  }
`;

const DisplayCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 15px;

  .cart-products {
    background: ${(props) => props.theme.backgroundCard};
    border-radius: 15px;
    padding: 15px;
    position: relative;

    p {
      padding-top: 5px;
      color: ${(props) => props.theme.titleProduct};
    }

    span {
      color: var(--price);
    }
  }

  #dark .cart-products {
    background: #1a3848;
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

export default BestSelling;
