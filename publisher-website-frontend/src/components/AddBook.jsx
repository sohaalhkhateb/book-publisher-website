import { useState } from 'react'
import './AddBook.css'
import axios
    from 'axios'
export function AddBook({ setAddBook }) {
    const [bookTitle, setBookTitle] = useState('');
    const [numberCopies, setNumberCopies] = useState('');
    const [writerName, setWriterName] = useState('');

    const saveBookTitleInput = (event) => {
        setBookTitle(event.target.value);
    }
    const saveNumberCopiesInput = (event) => {
        setNumberCopies(event.target.value);
    }
    const saveWriterNameInput = (event) => {
        setWriterName(event.target.value);
    }

    const addBook = async () => {
        /*
        const response = await axios.post('', {
            title: bookTitle,
            numberCopies: numberCopies,
            writerName: writerName
        })
            */
        setAddBook(false);
    }
    return (
        <div className="add-book-container">
            <p className='add-book-title'>
                add information for new book you added:
            </p>
            <input
                type="text"
                className='add-book-input'
                placeholder='book title'
                value={bookTitle}
                onChange={saveBookTitleInput}
            />
            <input
                type="text"
                className='add-book-input'
                placeholder='number of copies'
                value={numberCopies}
                onChange={saveNumberCopiesInput}
            />
            <input
                type="text"
                className='add-book-input'
                placeholder="writer's name"
                value={writerName}
                onChange={saveWriterNameInput}
            />
            <p className='add-book-txt'>
                assign a book to:
            </p>
            <select
                name=""
                className='add-book-select'
                id=""

            >
                <option value="">
                    finished
                </option>
                <option value="">
                    in-progress
                </option>
                <option value="">
                    review-needed
                </option>
                <option value="">
                    samples
                </option>
                <option value="">
                    ebooks
                </option>
            </select>
            <input
                type="file"
                className='add-book-input-file'
            />
            <button
                className='add-book-button'
                onClick={addBook}
            >
                add book
            </button>
        </div>
    )
}