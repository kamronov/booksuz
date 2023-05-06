import React, {useEffect, useState } from 'react'
import { Link, useNavigate,  } from 'react-router-dom'
import './Sign_in.scss'
import loginImg from '../../assets/img/login-banner.svg'


function Login() {

    const navigate = useNavigate();
    const [user, setUser]= useState([])
    
    useEffect(()=>{
        fetch('https://63df32c43d94d02c0bb5c567.mockapi.io/posts')
        .then((res)=>res.json())
        .then((data)=>setUser(data))
        
    },[])
    const handlerSignin = (e)=>{
        e.preventDefault()
        let newUser ={
            email:  e.target.email.value,
            password:  e.target.password.value,
        }
        if(user.find((item)=>item.email === newUser.email && item.password === newUser.password)){
            navigate('/')
            window.localStorage.setItem('token','123')
        }else{
            window.localStorage.setItem('null','null')
        } 
    }
    
  return (
    <div className='login'>
        <div className="login__inner container">
             <img className='login-banner' src={loginImg} alt="" />
            <div className="login__form ">
                    <h2 className='login__title'>Sign in</h2>
                    <p className='login__text'>Do not you have an account?<Link to='signup'> Sign up</Link></p>
                <form onSubmit={handlerSignin} action="#" className='formIn'>
                        <input className='' type="text" placeholder='Email'name='email' />
                        <input className='' type="text" placeholder='Password' name='password'/>
                        <button className='login__btn'>Next step</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login