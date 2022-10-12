import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {
  const [dataApi, setDataApi] = useState([]);
  const [dataApi2, setDataApi2] = useState([]);

  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get("http://localhost:3000/fruits");
      const response2 = await axios.get("http://localhost:3000/vegetables");
      const data = response.data;
      const data2 = response2.data;
      setDataApi(data);
      setDataApi2(data2);
    };

    fetchGet();
  }, []);
  return (
    <Section>
      <WrappedTitle>
        <h3>
          Categories<span>😋</span>
        </h3>
        <span>See all</span>
      </WrappedTitle>
      <WrappedSectionOfProducts>
        <ListOfProducts>
          <Link to="/fruits" state={dataApi}>
            <img src={"/images/apple.png"} alt="" />
            <p>Fruits</p>
          </Link>
          <Link to="/vegetables" state={dataApi2}>
            <img src={"/images/broccoli.png"} alt="" />
            <p>Vegetables</p>
          </Link>
          <Link>
            <img src={"/images/diary.png"} alt="" className="diary" />
            <p>Diary</p>
          </Link>
          <Link>
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
    color: var(--title-section);

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
    color: var(--title-section);

    img {
      object-fit: cover;
      background: var(--light-background);
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
