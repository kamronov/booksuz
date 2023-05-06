import React from 'react'
import { Outlet } from 'react-router-dom'
import Signup from '../../components/Signup/Signup'

function Login() {
  return (
    <div>
        <h2>Login</h2>
     <Outlet/>
    </div>
  )
}

export default Login