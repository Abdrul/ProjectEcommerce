import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../../utils/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfor] = useState({
    email: "",
    password: "",
  });

  const [errorForm, setErrorForm] = useState("");

  const handleOnChange = (e) => {
    setLoginInfor({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (loginInfo.email && loginInfo.password) {
        await signInWithEmailAndPassword(
          auth,
          loginInfo.email,
          loginInfo.password
        );

        setErrorForm("");
        navigate("/home");
      } else {
        setErrorForm("The password or email is incorrect");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <WrapperInput>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleOnChange}
            type="email"
            id="email"
            name="email"
          />
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleOnChange}
            type="password"
            id="password"
            name="password"
          />
        </WrapperInput>
        <ErrorMsg>{errorForm}</ErrorMsg>
        <button>Continue</button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  button {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 50px;
    padding: 15px 50px;
    background: var(--background);
    color: #fff;
    border: none;
    font-size: 16px;
    font-family: "DM Sans", sans-serif;
  }
`;

const ErrorMsg = styled.p`
  color: var(--price);
`;

const WrapperInput = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  label {
    padding-left: 10px;
    color: ${(props) => props.theme.titleProduct};
    transition: all ease-in-out 0.3s;
  }

  input {
    width: 100%;
    padding: 15px;
    outline: none;
    border: none;
    border-radius: 50px;
    background: ${(props) => props.theme.backgroundCard};
    font-size: 16px;
    font-family: "DM Sans", sans-serif;
    color: ${(props) => props.theme.titleProduct};
    transition: all ease-in-out 0.3s;
  }
`;

export default Login;
