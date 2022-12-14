import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {
  const [dataFruits, setDataFruits] = useState([]);
  const [dataVegetables, setDataVegetables] = useState([]);
  const [displayNoData, setDisplayNoData] = useState(false);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await axios.get("https://abdrul.github.io/db.json");
        const fruits = response.data.fruits;
        const vegetables = response.data.vegetables;
        setDataFruits(fruits);
        setDataVegetables(vegetables);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNames();
  }, []);

  const handleDisplayNoData = () => {
    setDisplayNoData(!false);
    setTimeout(() => {
      setDisplayNoData(false);
    }, "1000");
  };

  return (
    <Section>
      <WrappedTitle>
        <h3>
          Categories<span>😋</span>
        </h3>
        <span>
          <Link to="/allProducts">See all</Link>
        </span>
      </WrappedTitle>
      <WrappedSectionOfProducts>
        <span
          className={
            displayNoData
              ? "undisplay-no-data display-no-data"
              : "undisplay-no-data"
          }
        >
          no data for this part 😄
        </span>
        <ListOfProducts>
          <Link to="/fruits" state={dataFruits}>
            <img src={"/images/apple.png"} alt="" />
            <p>Fruits</p>
          </Link>
          <Link to="/vegetables" state={dataVegetables}>
            <img src={"/images/broccoli.png"} alt="" />
            <p>Vegetables</p>
          </Link>
          <Link onClick={handleDisplayNoData}>
            <img src={"/images/diary.png"} alt="" className="diary" />
            <p>Diary</p>
          </Link>
          <Link onClick={handleDisplayNoData}>
            <img src={"/images/meat.png"} alt="" />
            <p>Meat</p>
          </Link>
        </ListOfProducts>
      </WrappedSectionOfProducts>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 20px;
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
    cursor: pointer;
    a {
      color: #23aa49;
      text-decoration: none;
    }
  }
`;

const WrappedSectionOfProducts = styled.div`
  padding-top: 20px;

  .undisplay-no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.titleProduct};
    color: ${(props) => props.theme.backgroundCard};
    width: 300px;
    height: 50px;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;

    transition: all ease-in-out 0.3s;
  }

  .display-no-data {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

const ListOfProducts = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${(props) => props.theme.titleProduct};

    img {
      object-fit: cover;
      background: ${(props) => props.theme.backgroundCard};
      border-radius: 50%;
      padding: 10px;
    }

    .diary {
      width: 55px;
      height: 54px;
    }
  }
`;

export default Categories;
