import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase.config";

function SignUp() {
  const navigate = useNavigate();

  const [signupInfo, setSignupInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorForm, setErrorForm] = useState("");

  const handleOnChange = (e) => {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (signupInfo.email && signupInfo.password && signupInfo.username) {
        auth
          .createUserWithEmailAndPassword(signupInfo.email, signupInfo.password)
          .then(async (userAuth) => {
            await userAuth.user.updateProfile({
              displayName: signupInfo.username,
            });
            window.location.reload();
          });

        setErrorForm("");
        navigate("/home");
      } else {
        setErrorForm(
          "All fields must be filled in, the password need to have min 6 character"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} composant={Form}>
        <WrapperInput>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleOnChange}
            type="text"
            id="username"
            name="username"
          />
        </WrapperInput>
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
            minLength="6"
          />
        </WrapperInput>
        <ErrorMsg>{errorForm}</ErrorMsg>
        <button>Continue</button>
        <p className="info-terms">
          By clicking on “Continue” you are agreeing to our{" "}
          <span>terms of use</span>
        </p>
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
    border-radius: 50px;
    width: 100%;
    padding: 15px 50px;
    background: var(--background);
    color: #fff;
    border: none;
    font-size: 16px;
    font-family: "DM Sans", sans-serif;
  }

  .info-terms {
    margin-top: 15px;
    text-align: center;
    color: var(--description);
    font-size: 14px;
    padding-bottom: 20px;

    span {
      color: #5d5fef;
    }
  }
`;

const ErrorMsg = styled.p`
  color: var(--price);
  text-align: center;
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
    padding: 15px;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 50px;
    background: ${(props) => props.theme.backgroundCard};
    color: ${(props) => props.theme.titleProduct};
    transition: all ease-in-out 0.3s;
    font-size: 16px;
    font-family: "DM Sans", sans-serif;
  }
`;

export default SignUp;
