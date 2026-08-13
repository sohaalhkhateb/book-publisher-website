import { Header } from "../layout/Header";
import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import checkImage from '../../assets/images/icons/check.png'
import closeImage from '../../assets/images/icons/close.png'

import api from "../../lib/axios";
import { useNavigate, useParams } from "react-router";
import './EditBook.css'
import { NarrowView } from "../../components/NarrowView";

export function EditBook() {

  const params = useParams();


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

    async function fetchBook() {
      try {
        setLoading(true)
        const response = await api.get(`/books/${params.id}`);

        setTitle(response.data.title)
        setPageCount(response.data.page_count)
        setPublishingYear(response.data.publishing_year)
        setAuthor(response.data.author)
        setEdition(response.data.edition)
        setNumberOfCopies(response.data.number_of_copies)
        setNotes(response.data.notes)

      } catch (error) {
        console.log(error)

      } finally {
        setLoading(false);
      }
    }
    fetchBook();

  }, [])

  async function editBook() {

    setLoading(true);

    await api.patch(`/books/${params.id}`, {
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
          navigate(response.data.redirect, { state: 'your book has been updated successfully!!' })

        }
      })

      .catch((errors) => {
        setError(errors.response.data)
        setLoading(false)
      })
  }

  return (<NarrowView>
    <Header />
    <div className="editBook-container">
      <h2 className="edit-form-label">edit your book information :</h2>
      <div className="addBook-input-container">

        <InputFieldWithErrors
          color='darkkhaki'
          type='text'
          name='book title'
          value={title}
          setValue={setTitle}
          error={error.title}
        />
        <InputFieldWithErrors
          color='darkkhaki'
          type='number'
          name='book page count'
          value={pageCount}
          setValue={setPageCount}
          error={error.page_count}
          required={false}
        />
        <InputFieldWithErrors
          color='darkkhaki'
          type='number'
          name='book publishing year'
          value={publishingYear}
          setValue={setPublishingYear}
          error={error.publishing_year}
        />
        <InputFieldWithErrors
          color='darkkhaki'
          type='text'
          name='book author'
          value={author}
          setValue={setAuthor}
          error={error.author}
        />
        <InputFieldWithErrors
          color='darkkhaki'
          type='text'
          name='book edition'
          value={edition}
          setValue={setEdition}
          error={error.edition}
          required={false}
        />
        <InputFieldWithErrors
          color='darkkhaki'
          message="enter the number of copies you have"
          type='number'
          name='book copies count'
          value={numberOfCopies}
          setValue={setNumberOfCopies}
          error={error.number_of_copies}
          required={false}
        />
        <InputFieldWithErrors
          color='darkkhaki'
          type='text'
          name='notes'
          value={notes}
          setValue={setNotes}
          error={error.notes}
          required={false}
        />

        <InputFieldWithErrors
          color='darkkhaki'
          type='file'
          name='book cover or image'
          value={image}
          setValue={setImage}
          error={error.image}
          required={false}
        />
      </div>

      <div className="divider"></div>
      <div className="button-wrapper-left">
        <Button
          color='firebrick'
          text='cancel'
          position="left"
          image={closeImage}
          onClick={() => navigate(`/books/${params.id}`)}
          isLoading={loading}
        />
      </div>
      <div className="button-wrapper-right">
        <Button
          color='darkgreen'
          text='confirm'
          image={checkImage}
          onClick={editBook}
          isLoading={loading}
        />
      </div>
    </div>
  </NarrowView>
  )
}