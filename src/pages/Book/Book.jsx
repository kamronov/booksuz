import React from 'react'
import './Book.scss'

import {book} from '../../lib/bookData'
import { Link, useParams } from 'react-router-dom'
import { data } from '../../lib/writerData'
function Book() {
    const {slug} = useParams()
    const bookInfo = book.find((item)=> item.id === slug*1)
    const bookfilter = book.filter((item)=> item.category === bookInfo.category)
    const autorInfo = data.find((item)=> (bookInfo.writerId === item.id))
  return (
    <div className='book'>
        <div className="book__inner container">
            <div className="book__about">
                <img className='book__img' src={bookInfo.img} alt="" />

                <div className="book__description">
                    <div className="book__title">
                    <h2>{bookInfo.name}</h2>
                    <h6>{autorInfo.name}</h6>  
                    <span>Sahifalar soni: <b> {bookInfo.count}</b></span>  
                    <span>Chop etilgan: <b> {bookInfo.date}</b></span>  
                    <span>Janri: <b>{bookInfo.category}</b></span>  
                    </div>   

                    <div className="book__part">
                        <h6>To’liq ma’lumot <i className="bi bi-arrow-down"></i></h6> 
                        <div className="book__linke"></div>
                     </div>     
                     <p className='book__text'>{bookInfo.info}</p>       
                </div>
            </div>

            <ul className='list__recommendation'>
                {bookfilter && bookfilter.map((item, index )=>(
                <>
                 {item.id !== bookInfo.id ?
                  <li key={index}className='item__recommendation'>
                    <Link to={`/book/${item.id}`}>
                        <img src={item.img} alt="" />
                        <span>{item.name}</span> <br />
                    </Link>
                    <b>{item.price} so'm</b></li>: null
                    }
                </>
                ))}
            </ul>
           
        </div>
    </div>
  )
}

export default Book