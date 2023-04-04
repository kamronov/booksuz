import React from 'react'
import './Search.scss'
function Search() {
  return (
   <div className="search_bg">
     <div className='search '>
        <form className='search__form' action="#">
            <div className="search__title">
              <h2>Qidirish</h2>
            </div>
            <div className=''>
            <input className='search__inp' type="search" placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
            <button className='search__btn'><i className='bi-search'></i> Izlash</button>
            </div>
        </form>
    </div>
   </div>
  )
}

export default Search