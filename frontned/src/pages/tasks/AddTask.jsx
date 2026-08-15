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
import { Employees } from "../employees/Employees";
import { EmployeesSelector } from "../../components/EmployeesSelecor";
import { InfoCard } from "../../components/InfoCard";

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
                    type="text"
                    name="type"
                    error={errors.type}
                    value={type}
                    color='darkkhaki'
                    setValue={setType}
                    required={true}
                    message="enter task type here : "
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
                          name="pagesStart"
                          error={errors.pagesStart}
                          value={pagesStart}
                          color='darkkhaki'
                          setValue={setPagesStart}
                          required={false}
                          message="enter starting page here : "
                        />

                        <InputFieldWithErrors
                          type="number"
                          name="pagesEnd"
                          error={errors.pagesEnd}
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
      </NarrowView>
    </>
  )
}


function BookViewer({ type, chosenBook, setChosenBook }) {
  const [books, setBooks] = useState([]);
  const [selectedBookIds, setSelectedBooksIds] = useState(null);

  useEffect(() => {
    const getbooks = async () => {
      const response = await api.get(`/books?status=${type}`);
      setBooks(response.data.books);
    }
    getbooks();
  }, [type]);

  function onToggleBook(bookId) {
    setSelectedBooksIds((x) => {
      return (x === bookId ? null : bookId);
    });
  }
  return (
    <>
      <Header />
      <NarrowView>
        <p className="viewer-title">
          •select a books to assign :
        </p>
        <div className="books-container">
          <Books
            books={books}
            selectedBookIds={selectedBookIds}
            onToggleBook={onToggleBook}
          />
        </div>
      </NarrowView>
    </>
  )
}

function EmployeeViewer({ type, chosenEmployee, setChosenEmployee }) {
  const [employees, setEmployees] = useState([
    {
      "id": 1,
      "name": "Fadi Hatem",
      "age": 33,
      "rating": "3",
      "image": "http://backend.test/employees/1/image",
      "notes": null,
      "created_at": "2026-08-14T16:50:25.000000Z",
      "updated_at": "2026-08-14T16:50:25.000000Z",
      "pivot": {
        "occupation_id": 1,
        "employee_id": 1
      }
    },
    {
      "id": 2,
      "name": "Ali Alkateeb",
      "age": 28,
      "rating": "2",
      "image": "http://backend.test/employees/2/image",
      "notes": null,
      "created_at": "2026-08-14T16:51:30.000000Z",
      "updated_at": "2026-08-14T16:51:30.000000Z",
      "pivot": {
        "occupation_id": 1,
        "employee_id": 2
      }
    },
    {
      "id": 3,
      "name": "Hasan Mahmoud",
      "age": 33,
      "rating": "4",
      "image": "http://backend.test/employees/3/image",
      "notes": null,
      "created_at": "2026-08-14T16:52:40.000000Z",
      "updated_at": "2026-08-14T16:52:40.000000Z",
      "pivot": {
        "occupation_id": 1,
        "employee_id": 3
      }
    },
    {
      "id": 4,
      "name": "Kinan Ali",
      "age": 25,
      "rating": "4",
      "image": "http://backend.test/employees/4/image",
      "notes": null,
      "created_at": "2026-08-14T16:53:58.000000Z",
      "updated_at": "2026-08-14T16:53:58.000000Z",
      "pivot": {
        "occupation_id": 1,
        "employee_id": 4
      }
    },
    {
      "id": 5,
      "name": "Sara Ali",
      "age": 24,
      "rating": "4",
      "image": "http://backend.test/employees/5/image",
      "notes": null,
      "created_at": "2026-08-14T16:54:40.000000Z",
      "updated_at": "2026-08-14T16:54:40.000000Z",
      "pivot": {
        "occupation_id": 1,
        "employee_id": 5
      }
    },
    {
      "id": 6,
      "name": "farah Ahmad",
      "age": 30,
      "rating": "5",
      "image": "http://backend.test/employees/6/image",
      "notes": null,
      "created_at": "2026-08-14T16:55:20.000000Z",
      "updated_at": "2026-08-14T16:55:20.000000Z",
      "pivot": {
        "occupation_id": 1,
        "employee_id": 6
      }
    },
    {
      "id": 7,
      "name": "Jana Hasan",
      "age": 25,
      "rating": "3",
      "image": "http://backend.test/employees/7/image",
      "notes": null,
      "created_at": "2026-08-14T16:56:03.000000Z",
      "updated_at": "2026-08-14T16:56:03.000000Z",
      "pivot": {
        "occupation_id": 1,
        "employee_id": 7
      }
    },
    {
      "id": 8,
      "name": "Nada Ali",
      "age": 32,
      "rating": "3",
      "image": "http://backend.test/employees/8/image",
      "notes": null,
      "created_at": "2026-08-14T16:56:35.000000Z",
      "updated_at": "2026-08-14T16:56:35.000000Z",
      "pivot": {
        "occupation_id": 1,
        "employee_id": 8
      }
    },
    {
      "id": 10,
      "name": "Sara Ali",
      "age": 22,
      "rating": "4",
      "image": "http://backend.test/employees/10/image",
      "notes": null,
      "created_at": "2026-08-14T17:41:45.000000Z",
      "updated_at": "2026-08-14T17:41:45.000000Z",
      "pivot": {
        "occupation_id": 1,
        "employee_id": 10
      }
    }
  ]);
  const [selectEmployeeId, setSelectEmployeeId] = useState(null);

  /*  useEffect(() => {
     const getEmployees = async () => {
       const response = await api.get(`/employees?occupation=${type}`);
       setEmployees(response.data.employees);
       console.log(response.data.employees);
     }
     getEmployees();
   }, [type]);
  */
  function onToggleEmployee(employeeId) {
    setSelectEmployeeId((x) => {
      return (x === employeeId ? null : employeeId);
    });
  }

  return (
    <>
      <Header />
      <NarrowView>
        <p className="viewer-title">
          •select a employees to assign :
        </p>
        <InfoCard
          subtitle='tanslators'
          padding="10px"
          width='70'
          color="grey"
        />
        <br/>
        <EmployeesSelector
          employees={employees}
          selectEmployeeId={selectEmployeeId}
          onToggleEmployee={onToggleEmployee}
        />
      </NarrowView>
    </>
  )
}