import { useLocation, useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react';
import trashImage from '../../assets/images/icons/trash.png'
import checkImage from '../../assets/images/icons/check.png'
import editImage from '../../assets/images/icons/edit2.png'


import api from '../../lib/axios';
import { Button } from '../../components/Button';
import './ViewBook.css'
import { Header } from '../layout/Header';


export function ViewBook() {

    const params = useParams();
    const location = useLocation('');
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function deleteBook() {
        try {
            setLoading(true)
            const response = await api.delete(`/books/${book.id}`)
            if (response.data.success)
                navigate('/', { state: 'book has been deleted' })

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {

        async function fetchBook() {
            try {
                setLoading(true)
                const response = await api.get(`/books/${params.id}`);
                setBook(response.data)
            } catch (error) {
                console.log(error)

            } finally {
                setLoading(false);
            }
        }
        fetchBook();

    }, [])


    return (
        <>
            <Header />
            <h1>{location.state}</h1>
            <div className='viewbook-wrapper'>
                <div className='book-info-container'>

                    <h3>book title :</h3>
                    <p>{book.title}</p>

                    <h3>name</h3>
                    <p>sam</p>
                    <h3>name</h3>
                    <p>sam</p>
                    <h3>name</h3>
                    <p>sam</p>
                    <h3>name</h3>
                    <p>sam</p>
                    <h3>name</h3>
                    <p>sam</p>
                    <h3>name</h3>
                    <p>sam</p>
                    {// "id": 17,
                        // "title": "sambook",
                        // "page_count": 22,
                        // "publishing_year": 2002,
                        // "author": "sam",
                        // "edition": "1st",
                        // "number_of_copies": 20,
                        // "image": "http:\/\/backend.test\/images\/IK4I01Scf4vwEPCRZrbSzs3pHZnCav1OiHZoriQB.jpg",
                        // "notes": "ss",
                        // "created_at": "2026-08-08T12:06:59.000000Z",
                    }
                </div>
                <img src={book.image} alt="book image" width='200' height='300' />

            </div>
            <div className='button-container'>
                <Button
                    text='delete'
                    color='red'
                    onClick={deleteBook}
                    isLoading={loading}
                    image={trashImage}
                />
                <Button
                    text='edit'
                    onClick={() => navigate(`/books/edit/${book.id}`)}
                    isLoading={loading}
                    image={editImage}
                />
                <Button
                    text='ok'
                    color='green'
                    onClick={() => navigate('/')}
                    isLoading={loading}
                    image={checkImage}
                />
            </div>

        </>


    )
}
