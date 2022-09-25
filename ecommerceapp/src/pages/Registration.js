import React, { useState } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import styled from "styled-components";

const Button = styled.button`

  background: ${props => props.test ? "palevioletred" : "white"};
  color: ${props => props.test ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`



function Registration() {

  const [login, setLogin] = useState(true)



  return (
    <div>

      <Button test={!login} onClick={() => setLogin(false)}>S'inscrire</Button>
      <Button test={login} onClick={() => setLogin(true)}>Se connecter</Button>


      {login ? <Login/> : <SignUp/>}


    </div>
  )
}

export default Registration