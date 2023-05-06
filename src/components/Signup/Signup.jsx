import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signUp from '../../assets/img/signUp-banner.svg' 
import './Signup.scss'

function Signup() {
  const navigate = useNavigate()

  const register =(e)=>{
    e.preventDefault()
    const newUser ={
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
          password: e.target.password.value,
    }
    fetch('https://63df32c43d94d02c0bb5c567.mockapi.io/posts',{
          method: 'POST',
          headers: {'Content-type':'application/json'},
          body:JSON.stringify(newUser)
    })
    .then((res)=>{
      res.json()
      if(res.status){
        navigate('/')
        window.localStorage.setItem('token','123')
      }
    })
    .then((data)=>(data))
  }
  return (
   <div className='signUp'>
     <div className='signUp__inner container'>
        <img className='img__banner' src={signUp} alt="" />
        <div className="signUp__form">
          <div className="signUp__title">
            <h2>Sign up</h2>
            <p>Already have an account? <Link to='/login'>Sign in</Link></p>
          </div>
          <form onSubmit={register} className='formUp' action="#">
            <input type="text" name='firstName'  placeholder='First name' autoFocus/>
            <input type="text" name='lastName'placeholder='Last name' />
            <input type="text" name='phone' placeholder='Phone'/>
            <input type="text" name='email' placeholder='Email' />
            <input type="text" name='password' placeholder='Password'/>
            <button className='signUp__btn'>Next step</button>
          </form>
        </div>
    </div>
   </div>
  )
}

export default Signup