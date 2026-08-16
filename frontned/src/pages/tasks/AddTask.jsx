import { useEffect, useState } from "react";
import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Header } from "../layout/Header";
import { NarrowView } from "../../components/NarrowView";
import { Button } from "../../components/Button";
import rightArrow from '../../assets/images/icons/rightArrow.png'
import leftArrow from '../../assets/images/icons/leftArrow.png'
import { useNavigate } from "react-router";
import api from "../../lib/axios";
import './AddTask.css'
import { Books } from "../../components/Books";
import { EmployeesSelector } from "../../components/EmployeesSelecor";
import { InfoCard } from "../../components/InfoCard";

export function AddTask() {

  const [name, setName] = useState('');
  const [type, setType] = useState('translation');
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
        name, type, deadline, page_start: pagesStart, page_end: pagesEnd, notes, employee_id: employeeId, book_id: bookId
      })
        .then((response) => {
          if (response.data.success) {
            setLoading(false)
            navigate(response.data.redirect, { state: 'your task has been added successfully!!' })

          }
        })
        .catch((errors) => {
          if (Object.hasOwn(errors.response.data, 'employee_id')) {
            setPhase(3)
            setErrors(errors.response.data)
          }

          else if (Object.hasOwn(errors.response.data, 'book_id')) {
            setPhase(2)
            setErrors(errors.response.data)
          }
          else {
            setPhase(1)
            setErrors(errors.response.data)
          }

          setLoading(false)
        })
    }
  }

  return (
    <>
      <Header />
      <NarrowView>
        <div className="add-task-container">
          {
            phase == 1 &&
            (
              <div className="phase-1-container">
                <div className="phase-1-inputs">
                  <InputFieldWithErrors
                    type='text'
                    name='name'
                    error={errors.name}
                    value={name}
                    color='darkkhaki'
                    setValue={setName}
                    message="enter task name here : "
                  />
                  <InputFieldWithErrors
                    type="date"
                    name="deadline"
                    error={errors.deadline}
                    value={deadline}
                    color='darkkhaki'
                    setValue={setDeadline}
                    required={true}
                    message="enter deadline here : "
                  />
                  <div className='input-astrisk-container'>
                    <div className='input-container'>
                      <label className='input-label'>
                        • enter task type here :
                      </label>
                      <select
                        style={{

                          color: 'white',
                          borderRadius: '10px',
                          border: 'none',
                          padding: '10px 5px',
                          backgroundColor: 'darkkhaki'
                        }}
                        name='type'
                        value={type}
                        onChange={e => setType(e.target.value)}
                      >
                        <option value="translation">translation</option>
                        <option value="copyEditing">copyediting</option>
                        <option value="typeSetting">typesetting</option>
                        <option value="proofReading">proofReading</option>
                        <option value="printing">printing</option>
                      </select>
                    </div>

                    <p className='astrisk'>
                      *
                    </p>
                  </div>

                </div>
                <div className="saparator-container-y"></div>
                <div className="phase-1-optional-inputs">
                  <label className='input-label-assign'>
                    Do you want to assign the entire book?
                    <input
                      className='input-checkbox'
                      name={name}
                      type="checkbox"
                      color='darkkhaki'
                      checked={fullBook}
                      onChange={handleCheckBoxChange}
                    />
                  </label>

                  {
                    !fullBook && (
                      <>
                        <InputFieldWithErrors
                          type="number"
                          name="page_start"
                          error={errors.page_start}
                          value={pagesStart}
                          color='darkkhaki'
                          setValue={setPagesStart}
                          required={false}
                          message="enter starting page here : "
                        />

                        <InputFieldWithErrors
                          type="number"
                          name="page_end"
                          error={errors.page_end}
                          value={pagesEnd}
                          color='darkkhaki'
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
                    color='darkkhaki'
                    required={false}
                    message="enter notes (if you have any) here : "
                  />
                </div>
              </div>
            )
          }


          {
            phase == 2 &&
            (
              <>
                <h2>{errors.book_id}</h2>
                <BookViewer
                  type={type}
                  bookId={bookId}
                  setBookId={setBookId}
                />
              </>
            )
          }
          {
            phase == 3 &&
            (
              <>
                <h2>{errors.employee_id}</h2>
                <EmployeeViewer
                  type={type}
                  employeeId={employeeId}
                  setEmployeeId={setEmployeeId}
                />
              </>
            )
          }

          <div className="add-task-btns">
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
        </div>
      </NarrowView >
    </>
  )
}


function BookViewer({ type, bookId, setBookId }) {

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
      <Header />
      <NarrowView>
        <p className="viewer-title">
          •select a book to assign :
        </p>
        <div className="books-container">
          <Books
            books={books}
            bookId={bookId}
            setBookId={setBookId}
          />
        </div>
      </NarrowView>
    </>
  )
}

function EmployeeViewer({ type, employeeId, setEmployeeId }) {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const response = await api.get(`/employees?occupation=${type}`);
      setEmployees(response.data.occupation);
      console.log(response.data.employees);
    }
    getEmployees();
  }, [type]);

  return (
    <>
      <Header />
      <NarrowView>
        <p className="viewer-title">
          •select a employees to assign :
        </p>
        <InfoCard
          subtitle={employees.name}
          padding="10px"
          width='70'
          color="grey"
        />
        <br />
        <EmployeesSelector
          employees={employees.employees}
          employeeId={employeeId}
          setEmployeeId={setEmployeeId}
        />
      </NarrowView>
    </>
  )
}