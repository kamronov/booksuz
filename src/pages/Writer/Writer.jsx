import React from 'react'
import { data } from '../../lib/writerData'
import { Link, useParams } from 'react-router-dom'
import './Writer.scss'
import { book } from '../../lib/bookData'
function Writer() {
    const {slug}= useParams()
    const fillData = data.find((item)=> item.id === slug*1)
    const fillBook = book.filter((item)=> item.writerId === slug*1)
  return (
    <div className='autor'>
       <div className="autor__inner">
       <div className="writer__ava">
            <img src={fillData.img} alt="" />
            <span>{fillData.yearFull}</span>
        </div>
        <div className="autor__info">
            <h2>{fillData.name}</h2>
            <p>{fillData.bio}</p>

            <div className="autor__path">
          <i className="bi bi-bookmark-fill"> Ijodi</i>
          <p>Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi.</p>
        </div>
            <div className="book__title">
              <h3>Asarlari</h3>
              <span>Barchasini ko’rish</span>
            </div>
          <ul className='book__list'>
            {
             fillBook && fillBook.map((item , index)=> (
              <li key={ index} className='book__item'>
                <Link to={`/book/${item.id}`}>
                <img src={item.img} alt="" />
                <span>{item.name}</span> <br />
                </Link>
                <i className="bi bi-star-fill">{item.count}</i>
              </li>
             ))
            }
          </ul>

        </div>

      
       </div>
    </div>
  )
}

export default Writer