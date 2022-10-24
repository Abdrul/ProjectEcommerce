import React, { useState } from "react";
import Login from "../components/AuthForm/Login";
import SignUp from "../components/AuthForm/SignUp";
import styled from "styled-components";

function Registration({ toggleTheme, theme }) {
  const [login, setLogin] = useState(true);

  const onToggle = () => {
    toggleTheme();
  };

  return (
    <Main changeTheme={theme}>
      <WrapperImg>
        <img src={"/images/logo2.png"} alt="" />
      </WrapperImg>

      <div className="toggle">
        <label className="toggle-switch">
          <input type="checkbox" checked={theme} onChange={onToggle} />
          <span className="switch"></span>
        </label>
      </div>

      <WrapperButton>
        <Button test={!login} onClick={() => setLogin(false)}>
          Sign Up
        </Button>
        <Button test={login} onClick={() => setLogin(true)}>
          Log In
        </Button>
      </WrapperButton>

      {login ? <Login /> : <SignUp />}
    </Main>
  );
}

const Main = styled.main`
  padding: 0 15px;

  .toggle {
    text-align: center;
    padding-bottom: 25px;

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 25px;
      margin: 0 12px;

      input[type="checkbox"] {
        display: none;
      }

      .switch {
        position: absolute;
        cursor: pointer;
        background-color: var(--background);
        border-radius: 25px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: background-color 0.2s ease;

        &::before {
          position: absolute;
          content: "";
          left: 2px;
          top: 2px;
          width: 21px;
          height: 21px;
          background-color: #fff;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }
      }

      input[type="checkbox"]:checked + .switch::before {
        transform: translateX(25px);
        background-color: var(--background);
      }

      input[type="checkbox"]:checked + .switch {
        background-color: var(--title-section);
      }
    }
  }

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
