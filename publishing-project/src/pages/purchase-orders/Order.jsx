import './Order.css'
import book1Image from '../../assets/images/book1.png'
import book2Image from '../../assets/images/book2.png'
import book3Image from '../../assets/images/book3.png'
import { useState } from 'react'
export function Order({ order }) {
    console.log(order);
    return (
        <div className="order-container">
            <p className='order-title'>
                Purchase Order:
            </p>
            <p className='order-txt'>
                For the following items:
            </p>
            <div className='books-order-container'>
                {
                    order.books.map((book) => {
                        return (
                            <div
                                className='book-order-container'
                                key={book.id}
                            >
                                <img
                                    src={`../../src/assets/images/${book.image}.png`}
                                    className='book-order-image'
                                    alt=""
                                />
                                <p className='book-order-txt'>
                                    Quantity: {book.quantity}
                                </p>
                                <p className='book-order-txt'>
                                    Name: {book.name}
                                </p>
                                <p className='book-order-txt'>
                                    Author: {book.author}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <p className='order-txt'>
                From:
            </p>
            <p className='order-txt-name'>
                {order.from}
            </p>
            <div className='order-btn-container'>
                <button className='order-btn'>
                    Accept
                </button>
                <button className='order-btn'>
                    Reject
                </button>
            </div>
        </div>
    )
}