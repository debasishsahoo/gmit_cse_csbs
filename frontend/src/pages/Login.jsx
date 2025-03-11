import React from 'react'

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
      <form>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
        </div>
    )
}

export default Login
