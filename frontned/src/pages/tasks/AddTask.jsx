import { useEffect, useState } from "react";
import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Header } from "../layout/Header";
import { NarrowView } from "../../components/NarrowView";
import { Button } from "../../components/Button";
import rightArrow from '../../assets/images/icons/rightArrow.png'
import leftArrow from '../../assets/images/icons/leftArrow.png'
import { useNavigate } from "react-router";
import api from "../../lib/axios";


export function AddTask() {

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [deadline, setDeadline] = useState('');
  const [fullBook, setFullBook] = useState(true);
  const [pagesStart, setPagesStart] = useState('');
  const [pagesEnd, setPagesEnd] = useState('');
  const [notes, setNotes] = useState('');
  const [phase, setPhase] = useState(1);
  const [bookId, setBookId] = useState('');
  const [employeeId, setEmployeeId] = useState('');


  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleCheckBoxChange(e) {
    setFullBook(e.target.checked)
    if (fullBook) {
      setPagesStart('')
      setPagesEnd('')
    }
  }
  function leftClick() {
    if (phase > 1) {
      let temp = phase - 1
      setPhase(temp)
    }
  }
  function rightClick() {
    if (phase < 3) {
      let temp = phase + 1
      setPhase(temp)
    }
    if (phase == 3) {
      setLoading(true);
      api.post('/tasks', {
        name, type, deadline, pagesStart, pagesEnd, notes, employeeId, bookId
      })
        .then((response) => {
          if (response.data.success) {
            setLoading(false)
            navigate(response.data.redirect, { state: 'your task has been added successfully!!' })

          }
        })
        .catch((errors) => {
          setPhase(1)
          setErrors(errors.response.data)
          setLoading(false)
        })
    }
  }

  return (
    <>
      <Header />
      <NarrowView>
        {
          phase == 1 &&
          (<>
            <InputFieldWithErrors
              type='text'
              name='name'
              error={errors.name}
              value={name}
              setValue={setName}
              message="enter task name here : "
            />
            <InputFieldWithErrors
              type="text"
              name="type"
              error={errors.type}
              value={type}
              setValue={setType}
              required={true}
              message="enter task type here : "
            />
            <InputFieldWithErrors
              type="date"
              name="deadline"
              error={errors.deadline}
              value={deadline}
              setValue={setDeadline}
              required={true}
              message="enter deadline here : "
            />

            <label className='input-label'>
              Do you want to assign the entire book?
              <input className='input-checkbox'
                name={name}
                type="checkbox"
                checked={fullBook}
                onChange={handleCheckBoxChange}
              />
            </label>

            {
              !fullBook && (
                <>
                  <InputFieldWithErrors
                    type="number"
                    name="pagesStart"
                    error={errors.pagesStart}
                    value={pagesStart}
                    setValue={setPagesStart}
                    required={false}
                    message="enter starting page here : "
                  />

                  <InputFieldWithErrors
                    type="number"
                    name="pagesEnd"
                    error={errors.pagesEnd}
                    value={pagesEnd}
                    setValue={setPagesEnd}
                    required={false}
                    message="enter ending page here : "
                  />
                </>
              )
            }
            <InputFieldWithErrors
              type="text"
              name="notes"
              error={errors.notes}
              value={notes}
              setValue={setNotes}
              required={false}
              message="enter notes (if you have any) here : "
            />
          </>)
        }

        {
          phase == 2 &&
          (

            <BookViewer
              type={type}
              chosenBook={bookId}
              setChosenBook={setBookId}
            />

          )
        }
        {
          phase == 3 &&
          (
            <>
              <EmployeeViewer
                type={type}
                employeeId={employeeId}
                setChosenEmployee={setEmployeeId}
              />
            </>
          )
        }
      </NarrowView>

      <div>
        <Button
          text='back'
          image={leftArrow}
          position="left"
          isLoading={loading}
          color='red'
          onClick={leftClick}
        />
        <Button
          text='next'
          image={rightArrow}
          color='green'
          isLoading={loading}
          onClick={rightClick}
        />
      </div>
    </>
  )
}


function BookViewer({ type, chosenBook, setChosenBook }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getbooks = async () => {
      const response = await api.get(`/books?status=${type}`);
      setBooks(response.data.books);
    }
    getbooks();
  }, [type]);
  return (
    <>

    </>
  )
}

function EmployeeViewer({ type, chosenEmployee, setChosenEmployee }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const response = await api.get(`/employees?occupation=${type}`);
      setEmployees(response.data.employees);
    }
    getEmployees();
  }, [type]);
  return (
    <>
    </>
  )
}