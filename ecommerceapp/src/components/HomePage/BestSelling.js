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
        <div>
          <img src={"/images/paprika.png"} alt="" />
          <p>Bell Pepper Red</p>
          <span>1kg, 4$</span>
        </div>
        <div>
          <img src={"/images/steak.png"} alt="" />
          <p>Bell Pepper Red</p>
          <span>1kg, 4$</span>
        </div>
      </DisplayCards>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 15px;
`;

const WrappedTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: var(--title-section);

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

  div {
    background: var(--light-background);
    border-radius: 15px;
    padding: 15px;

    p {
      padding-top: 5px;
      color: var(--title-section);
    }

    span {
      color: var(--price);
    }
  }
`;

export default BestSelling;
