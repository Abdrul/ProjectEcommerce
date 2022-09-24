import React, { useState } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

function Registration() {

  const [login, setLogin] = useState(true)



  return (
    <div>

      <button onClick={() => setLogin(false)}>S'inscrire</button>
      <button onClick={() => setLogin(true)}>Se connecter</button>


      {login ? <Login/> : <SignUp/>}


    </div>
  )
}

export default Registration