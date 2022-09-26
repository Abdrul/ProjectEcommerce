import React from 'react'
import styled from "styled-components";




function Login() {
  return (
    <div>
      <Form>
        <WrapperInput>
          <label htmlFor="email">Email</label>
          <input type="email" id='email'/>
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="password">Password</label>
          <input type="password" id='password'/>
        </WrapperInput>
        <button>Continue</button>
      </Form>
    </div>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

    button {
      margin-top: 20px;
      border-radius: 20% 12% 15%;
      padding: 15px 50px;
      background: var(--background);
      color: #fff;
      border: none;
      font-size: 16px;
    }
`

const WrapperInput = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

    input {
      padding-top: 16px;
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 1px solid #000;
      font-size: 16px;
      font-family: "DM Sans", sans-serif;

    }
`

export default Login