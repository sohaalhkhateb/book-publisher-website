import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import upwardsArrow from '../../assets/images/icons/upwardsArrow.png'
import closeImage from '../../assets/images/icons/close.png'
import api from "../../lib/axios";
import { useNavigate, useOutletContext } from "react-router";
import './AddBook.css'

export function AddBook() {

  const setLayoutContext = useOutletContext()
  const [title, setTitle] = useState('');
  const [pageCount, setPageCount] = useState(null);
  const [publishingYear, setPublishingYear] = useState(null);
  const [author, setAuthor] = useState();
  const [edition, setEdition] = useState('');
  const [numberOfCopies, setNumberOfCopies] = useState(null);
  const [notes, setNotes] = useState('');
  const [image, setImage] = useState(null);

  const [error, setError] = useState({});

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLayoutContext({
      searchBar: false,
      sideBar: true,
      narrowView: true,
      bodyHeader: 'add a new book to your collection :'
    })

  }, [])


  async function uploadBook() {

    setLoading(true);

    await api.post('/books', {
      title,
      page_count: pageCount,
      publishing_year: publishingYear,
      author,
      edition,
      number_of_copies: numberOfCopies,
      notes,
      image
    }, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })

      .then((response) => {
        if (response.data.success) {
          setLoading(false)
          navigate(response.data.redirect, { state: 'your book has been added successfully!!' })

        }
      })

      .catch((errors) => {
        setError(errors.response.data)
        setLoading(false)
      })
  }

  return (
    <>
      <div className="addBook-input-container">

        <InputFieldWithErrors
          type='text'
          name='book title'
          value={title}
          setValue={setTitle}
          error={error.title}
        />
        <InputFieldWithErrors
          type='number'
          name='book page count'
          value={pageCount}
          setValue={setPageCount}
          error={error.page_count}
          required={false}
        />
        <InputFieldWithErrors
          type='number'
          name='book publishing year'
          value={publishingYear}
          setValue={setPublishingYear}
          error={error.publishing_year}
        />
        <InputFieldWithErrors
          type='text'
          name='book author'
          value={author}
          setValue={setAuthor}
          error={error.author}
        />
        <InputFieldWithErrors
          type='text'
          name='book edition'
          value={edition}
          setValue={setEdition}
          error={error.edition}
          required={false}
        />
        <InputFieldWithErrors
          message="enter the number of copies you have"
          type='number'
          name='book copies count'
          value={numberOfCopies}
          setValue={setNumberOfCopies}
          error={error.number_of_copies}
          required={true}
        />
        <InputFieldWithErrors
          type='text'
          name='notes'
          value={notes}
          setValue={setNotes}
          error={error.notes}
          required={false}
        />

        <InputFieldWithErrors
          type='file'
          name='book cover or image'
          value={image}
          setValue={setImage}
          error={error.image}
          required={false}
        />
      </div>

      <div className="divider"></div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          position: 'sticky',
          bottom: '10px',
          marginTop: '10px'
        }}>

        <div>
          <Button
            color='firebrick'
            text='cancel'
            position="left"
            image={closeImage}
            onClick={() => navigate('/')}
            isLoading={loading}
          />
        </div>
        <div>
          <Button
            color='darkgreen'
            text='add'
            image={upwardsArrow}
            onClick={uploadBook}
            isLoading={loading}
          />
        </div>
      </div>
    </>
  )
}