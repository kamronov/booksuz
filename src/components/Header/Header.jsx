import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logomain from '../../assets/img/header-log.svg'
function Header({name}) {
    return (
        <header className='header'>
            <nav className=' header__nav container'>
                        <Link to='/'><img src={logomain} alt="" /></Link>
                <ul className='header__list'>
                    <li className='header__item nav_active'>
                        <Link>Bosh sahifa</Link>
                    </li>
                    <li className='header__item'>
                        <Link>Nasr</Link>
                    </li>
                    <li className='header__item'>
                        <Link>Nazm</Link>
                    </li>
                    <li className='header__item'>
                        <Link>Maqolalar</Link>
                    </li>
                    <li className='header__item'>
                        <Link>Forum</Link>
                    </li>
                     <li className='header__item'>
                        <Link to='/login'>Login</Link>
                    </li>
                    {/* <img src={img} className='header__user' alt='ava'/> */}
                    {/* <h4 className='avatar'>{name}</h4> */}
                </ul>
            </nav>
            <div className="header__line"></div>
        </header>
    )
}

export default Header