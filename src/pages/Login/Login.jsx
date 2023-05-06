import React from 'react'
import { Outlet } from 'react-router-dom'

function Login() {
  return (
    <div>
        <h2>Login</h2>
     <Outlet/>
    </div>
  )
}

export default Login