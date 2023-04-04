import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'
import loginImg from '../../assets/img/login-banner.svg'
let obj ={
    userName: 'ali',
    password: 123
}

let key = 'qwertyuiop'
function Login() {
    const navigate = useNavigate();
    const loginChecking =(e)=>{
        e.preventDefault()
        
        if(obj.userName == e.target.usermail.value && obj.password == e.target.password.value){
            navigate('/')
            window.localStorage.setItem('key', key)
        }else {
            alert('hato user yoki parol')
        }
    }
  return (
    <div className='login'>
        <div className="login__inner container">
            <img className='login-banner' src={loginImg} alt="" />
            <div className="login__form ">
                <h2 className='login__title'>Sign in</h2>
                <p className='login__text'>Do not you have an account?<Link to='/signup'> Sign up</Link></p>
            <form onSubmit={loginChecking} action="#" className='formIn'>
            <input className='' type="text" placeholder='Email'name='usermail' />
            <input className='' type="text" placeholder='Password' name='password'/>
            <button className='login__btn'>Next step</button>
        </form>
            </div>
        </div>
        
    </div>
  )
}

export default Login