import React from 'react'
import './Writers.scss'
import { data } from '../../lib/writerData'
import { Link } from 'react-router-dom'
function Writers() {
  return (
    <div className='writers'>
        <div className="writers__header">
            <div className="writers__header--title">
                <h2>Asosiy kategoriyalar</h2>
            </div>
            <ul className='writers__category '>
                    <li className='writers__item'>
                        <button className='writers__link'>Temuriylar davri </button>
                    </li>
                    <li className='writers__item'>
                        <button className='writers__link actCategory'>Jadid adabiyoti </button>
                    </li>
                    <li className='writers__item'>
                        <button className='writers__link'>Sovet davri </button>
                    </li>
                    <li className='writers__item'>
                        <button className='writers__link'>Mustaqillik davri</button>
                    </li>
                </ul>
        </div>

        <ul className="writer__list container">
            {
                data && data.map((item, index)=>(
                    <li className='writer__item' key={index}>
                      <Link to={`/writer/${item.id}`}>
                      <img src={item.img} alt="" />
                        <h3>{item.name}</h3>
                        <span>{item.year}</span>
                        <div className="books">
                        <i className="bi bi-journals">34</i>
                        <i className="bi bi-mic-fill">13</i>
                        </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Writers