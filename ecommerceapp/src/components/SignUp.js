import React from 'react'

function SignUp() {

  
  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email'/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password'/>
        </div>
        <button>Continue</button>
      </form>
    </div>
  )
}

export default SignUp