import React from 'react'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import Search from '../../components/Search/Search'
import Writers from '../../components/Writers/Writers'
import './Home.scss'
function Home() {
  return (
    <div className='home'>
        <Slider/>
        <Search/>
        <Writers/>
    </div>
  )
}

export default Home