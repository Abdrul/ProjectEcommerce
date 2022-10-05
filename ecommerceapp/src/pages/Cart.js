import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [dataApi, setDataApi] = useState([]);
  const local = JSON.parse(localStorage.getItem("id"));
  console.log(local);

  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get("http://localhost:3000/fruits");
      const data = response.data;
      setDataApi(data);
    };

    fetchGet();
  }, []);

  return (
    <div>
      {dataApi.map((product) => {
        console.log(product.id, local);
        if (product.id === local) {
          return (
            <DisplayCards key={product.id}>
              <img src={product.img} alt="" />
              <p> {product.name} </p>
              <span> {product.price} </span>
              <div className="add-card">+</div>
            </DisplayCards>
          );
        }
      })}
    </div>
  );
}

const DisplayCards = styled.div`
  background: var(--light-background);
  border-radius: 15px;
  padding: 10px;
  height: 155px;
  position: relative;

  p {
    padding-top: 5px;
    color: var(--title-section);
  }

  span {
    color: var(--price);
  }
  img {
    object-fit: cover;
    width: 80px;
    height: 80px;
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

export default Cart;
