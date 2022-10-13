import React, { useState } from "react";
import Login from "../components/AuthForm/Login";
import SignUp from "../components/AuthForm/SignUp";
import styled from "styled-components";

function Registration() {
  const [login, setLogin] = useState(true);

  return (
    <Main>
      <WrapperImg>
        <img src={"/images/logo2.png"} alt="" />
      </WrapperImg>

      <WrapperButton>
        <Button test={!login} onClick={() => setLogin(false)}>
          S'inscrire
        </Button>
        <Button test={login} onClick={() => setLogin(true)}>
          Se connecter
        </Button>
      </WrapperButton>

      {login ? <Login /> : <SignUp />}
    </Main>
  );
}

const Main = styled.main`
  padding: 0 15px;
`;

const WrapperImg = styled.div`
  margin: 50px 0;

  img {
    display: block;
    margin: 0 auto;
  }
`;

const WrapperButton = styled.div`
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Button = styled.button`
  background: ${(props) => (props.test ? "var(--background)" : "white")};
  color: ${(props) => (props.test ? "white" : "var(--background)")};
  border: none;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid var(--background);
`;

export default Registration;
