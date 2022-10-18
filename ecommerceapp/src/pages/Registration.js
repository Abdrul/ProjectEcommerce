import React, { useState } from "react";
import Login from "../components/AuthForm/Login";
import SignUp from "../components/AuthForm/SignUp";
import styled from "styled-components";

function Registration({ toggleTheme, theme }) {
  const [login, setLogin] = useState(true);
  return (
    <Main changeTheme={theme}>
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

      <button className="change-theme" onClick={toggleTheme}>
        Change Theme
      </button>
    </Main>
  );
}

const Main = styled.main`
  padding: 0 15px;

  .change-theme {
    display: block;
    margin: 0 auto;
    padding: 15px;
    border-radius: 15px;
    border: none;
    background: ${(props) => (props.changeTheme ? "#0D1F29" : "#fff")};
    color: ${(props) => (props.changeTheme ? "#fff" : "#0D1F29")};
    transition: all ease-in-out 0.3s;
  }
`;

const WrapperImg = styled.div`
  padding: 50px 0;

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
  transition: all ease-in-out 0.3s;
  border: none;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid var(--background);
`;

export default Registration;
