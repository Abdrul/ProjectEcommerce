import React from 'react'
import styled from "styled-components";


function SignUp() {

  
  return (
    <div>
      <Form composant={Form}>
        <WrapperInput>
          <label htmlFor="username">Username</label>
          <input type="text" id="username"/>
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="email">Email</label>
          <input type="email" id='email'/>
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="password">Password</label>
          <input type="password" id='password'/>
        </WrapperInput>
        <button>Continue</button>
        <p>By clicking on “Continue” you are agreeing to our <span>terms of use</span></p>
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
    
    p {
      margin-top: 15px;
      text-align: center;
      color: var(--description);
      font-size: 14px;

      span{
        color: #5D5FEF;
      }

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

export default SignUp
