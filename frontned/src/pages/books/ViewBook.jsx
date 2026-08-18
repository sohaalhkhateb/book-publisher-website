import { useLocation, useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react';
import trashImage from '../../assets/images/icons/trash.png'
import checkImage from '../../assets/images/icons/check.png'
import editImage from '../../assets/images/icons/edit2.png'


import api from '../../lib/axios';
import { Button } from '../../components/Button';
import './ViewBook.css'
import { Header } from '../layout/Header';
import { InfoCard } from '../../components/InfoCard';
import { NarrowView } from '../../components/NarrowView';


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
            <NarrowView>
                <h1>{location.state}</h1>
                <div className='view-book-container'>
                    <div className='viewbook-wrapper'>
                        <div className='book-info-container'>
                            <InfoCard
                                title="title "
                                subtitle={book.title}
                            />
                            <InfoCard
                                title="page Count "
                                subtitle={book.page_count}
                            />
                            <InfoCard
                                title="publishing year "
                                subtitle={book.publishing_year}
                            />
                            <InfoCard
                                title="author "
                                subtitle={book.author}
                            />
                        </div>
                        <div className='separator-container'></div>
                        <div className='book-info-container'>

                            <InfoCard
                                title="edition "
                                subtitle={book.edition}
                            />
                            <InfoCard
                                title="copies "
                                subtitle={book.number_of_copies}
                            />
                            <InfoCard
                                title="notes "
                                subtitle={book.notes}
                                hieght={6}
                            />
                        </div>
                
                        <img src={book.image} className='view-book-img' alt="book image" width='200' height='300' />
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
                </div>
            </NarrowView>
        </>


    )
}
