import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories({ themeValue }) {
  const [dataFruits, setDataFruits] = useState([]);
  const [dataVegetables, setDataVegetables] = useState([]);
  const [displayNoData, setDisplayNoData] = useState(false);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const res = await Promise.all([
          axios.get("http://localhost:3000/fruits"),
          axios.get("http://localhost:3000/vegetables"),
        ]);
        const data = res.map((res) => res.data);
        setDataFruits(data[0]);
        setDataVegetables(data[1]);
      } catch {
        throw Error("Promise failed");
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
    <Section themeValue={themeValue}>
      <WrappedTitle>
        <h3>
          Categories<span>😋</span>
        </h3>
        <span>See all</span>
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
          <Link>
            <img
              src={"/images/diary.png"}
              alt=""
              className="diary"
              onClick={handleDisplayNoData}
            />
            <p>Diary</p>
          </Link>
          <Link>
            <img
              src={"/images/meat.png"}
              alt=""
              onClick={handleDisplayNoData}
            />
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
    color: #23aa49;
  }
`;

const WrappedSectionOfProducts = styled.div`
  padding-top: 20px;

  .undisplay-no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => (props.themeValue ? "#0D1F29" : "#fff")};
    color: ${(props) => (props.themeValue ? "#fff" : "#0D1F29")};
    width: 80%;
    height: 50px;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all ease-in-out 0.3s;
  }

  .display-no-data {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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
