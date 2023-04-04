import React from 'react'
import { Link } from 'react-router-dom'
import signUp from '../../assets/img/signUp-banner.svg' 
import './Signup.scss'
function Signup() {
  return (
   <div className='signUp'>
     <div className='signUp__inner container'>
        <img className='img__banner' src={signUp} alt="" />
        <div className="signUp__form">
          <div className="signUp__title">
            <h2>Sign up</h2>
            <p>Already have an account? <Link to='/login'>Sign in</Link></p>
          </div>
          <form className='formUp' action="#">
            <input type="text" name='firstName'  placeholder='First name'/>
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