import './Order.css'
export function Order({order, title}) {
    return(
        <div className="order-container">
            <p className='order-title'>
                {title}
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