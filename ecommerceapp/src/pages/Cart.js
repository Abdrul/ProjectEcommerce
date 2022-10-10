import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [dataApi, setDataApi] = useState([]);
  const [localSto, setLocalSto] = useState([]);
  console.log(localSto);
  const [countQuantity, setCountQuantity] = useState();

  const handleIncreaseQuantity = () => {};

  const handleDecreaseQuantity = (quantity, id) => {
    // setLocalSto((localSto) =>
    //   localSto.map((item) =>
    //     item.id === id
    //       ? {
    //           ...item,
    //           quantity: item.quantity - 1,
    //         }
    //       : item
    //   )
    // );
    // localStorage.setItem("cart", JSON.stringify(localSto));

    const news = localSto.map((i) =>
      i.id === id
        ? {
            ...i,
            quantity: i.quantity - 1,
          }
        : i
    );
    localStorage.setItem("cart", JSON.stringify(news));
    setLocalSto(news);
  };

  // useEffect(() => {
  //   const cartState = JSON.parse(localStorage.getItem("cart"));
  //   if (cartState) {
  //     setLocalSto(cartState);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(localSto));
  // }, [localSto]);

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
                <span> {product.price} </span>
              </div>
              <form>
                <div
                  onClick={() =>
                    handleDecreaseQuantity(product.quantity, product.id)
                  }
                  className="value-button decrease"
                >
                  -
                </div>
                {/* <input
                  type="number"
                  id="number"
                  value={product.quantity}
                /> */}
                <span>{product.quantity}</span>
                <div
                  onClick={handleIncreaseQuantity}
                  className="value-button increase"
                >
                  +
                </div>
              </form>
            </DisplayCards>
          );
        })}
      </Section>
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

export default Cart;
