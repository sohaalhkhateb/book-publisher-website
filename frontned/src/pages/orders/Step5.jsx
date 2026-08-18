import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import upwardsArrow from '../../assets/images/icons/upwardsArrow.png'
import closeImage from '../../assets/images/icons/close.png'
import api from "../../lib/axios";
import { useNavigate } from "react-router";


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
      <h2>choose a book</h2>



      {books.map((book) => (

        <div key={book.id}
          onClick={() => setBookId(book.id)}
        >
          <p>book title : {book.title}</p>
          <p>edition : {book.edition}</p>
          <p>author : {book.author}</p>
          <p>number of copies : {book.number_of_copies}</p>
          <hr />
        </div>
      ))}
      {error.book_id && <p>{error.book_id}</p>}
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


      <hr />


      <Button
        color='firebrick'
        text='go back'
        position="left"
        image={closeImage}
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
    </>
  )
}