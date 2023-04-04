import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logomain from '../../assets/img/header-log.svg'
function Header() {
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
                    <button className='header__user'></button>
                </ul>
            </nav>
            <div className="header__line"></div>
        </header>
    )
}

export default Header