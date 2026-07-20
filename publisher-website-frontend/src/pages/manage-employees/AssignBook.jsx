import { useState } from 'react'
import './AssignBook.css'
export function AssignBook({
    title, image, number, writer }) {
        const [showAssign, setShowAssign] = useState(false);
        function assignBook() {
            setShowAssign(!showAssign);
        }
    return (
        <div 
            className="product-container"
            onClick={assignBook}
        >
            <img
                src={image}
                className='product-image'
                alt=""
            />
            <p className='product-title paragraph'>
                Book Title: {title}
            </p>
            <p className='number-copies paragraph'>
                Number of copies: {number}
            </p>
            <p className='writer-name paragraph'>
                Writer's Name: {writer}
            </p>
        </div>
    )
}