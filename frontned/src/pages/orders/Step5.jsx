import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import upwardsArrow from '../../assets/images/icons/upwardsArrow.png'
import backImage from '../../assets/images/icons/back.png'
import api from "../../lib/axios";
import { useNavigate } from "react-router";
import { BookInfo } from "../../components/BookInfo";


export function Step5() {


  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [comment, setComment] = useState('');


  const [error, setError] = useState({});


  const navigate = useNavigate();


  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function getData() {

      try {
        setLoading(true)
        const sessionResponse = await api.get('/sessionUserId')
        const response = await api.post('/guest/books', {
          user_id: sessionResponse.data,
        })
        setBooks(response.data)
      } catch (error) {
        setError(error.response.data)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])





  async function next() {

    setLoading(true);
    setError({});

    await api.post('/orders?step=4', {
      book_id: bookId || null,
      quantity,
      comment,
    }).then((response) => {
      if (response.data.success) {
        setLoading(false)
        navigate('/guestOrder/3')
      }
    }).catch((errors) => {
      setError(errors.response.data.errors ?? errors.response.data)
      setLoading(false)
    })
  }


  return (
    <>
      <h2
        style={{
          fontSize: 'clamp(25px,2vw,30px)',
          color: 'var(--primary)',
        }}
      >•choose a book :</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))',
        gap: '20px',
        position: 'relative',
      }}>
        {books.map((book) => (
          <BookInfo
            key={book.id}
            title={book.title}
            edition={book.edition}
            author={book.author}
            copies={book.number_of_copies}
            id={book.id}
            bookId={bookId}
            onClick={() => setBookId(book.id)}
          />
        ))}
      </div>
      <br />
      <hr />
      <br />
      {error.book_id && <p>{error.book_id}</p>}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        < InputFieldWithErrors
          type='number'
          name='quantity'
          value={quantity}
          setValue={setQuantity}
          error={error.quantity}
        />
        <InputFieldWithErrors
          type='text'
          name='notes'
          value={comment}
          setValue={setComment}
          error={error.comment}
          required={false}
        />
      </div>

      <br />
      <hr />
      <br />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '10px',
        position: 'fixed',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '1000',
        padding: '12px 40px',
        paddingBottom: '40px',
      }}>
        <Button
          color='firebrick'
          text='go back'
          position="left"
          image={backImage}
          onClick={() => navigate('/guestOrder/4')}
          isLoading={loading}
        />
        <Button
          color='darkgreen'
          text='next'
          image={upwardsArrow}
          onClick={next}
          isLoading={loading}
        />

      </div>
    </>
  )
}