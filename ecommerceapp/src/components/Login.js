import React from 'react'

function Login() {
  return (
    <div>
      <form>
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

export default Login