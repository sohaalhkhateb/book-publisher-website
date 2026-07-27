import { useState } from 'react'
import './AssignBook.css'
import '../../index.css'
import checkBook from '../../assets/images/icons/ok-48.png'
import { AssignTask } from './AssignTask';
export function AssignBook({
    title, image, number, writer, assignedState, assignedEmp }) {
    const [isAssign, setIsAssign] = useState(assignedState);
    const [showAssign, setShowAssign] = useState(false);
    const [assignMore, setAssignMore] = useState(false);
    const assignBook = (event) => {
        event.stopPropagation();
        if (isAssign) {
            setAssignMore(true);
        }
        else {
            setShowAssign(true);
        }

        //assign this book to the specified employee 
    }
    const showAssignComponent = (event) => {
        event.stopPropagation();
        setShowAssign(true);
    }
    const showAssignExtra = (event) => {
        event.stopPropagation();
        setAssignMore(false);
        setShowAssign(true);
    }
    const closeAssignExtra = (event) => {
        event.stopPropagation();
        setAssignMore(false);
    }
    return (
        <div
            className={isAssign ? "product-container assigned" : "product-container"}
            onClick={assignBook}
        >
            {
                showAssign &&
                <AssignTask
                    setIsAssign={setIsAssign}
                    showAssign={showAssign}
                    setShowAssign={setShowAssign}
                />
            }
            {
                isAssign && (
                    <div className='check-container'>
                        <img
                            src={checkBook}
                            className='check-book-icon'
                            alt=""
                        />
                        <p className='selected-txt'>
                            assigned
                        </p>
                    </div>
                )
            }

            <img
                src={image}
                className='product-image'
                alt=""
            />
            <p className='product-title paragraph'>
                Book Title: {title}
            </p>
            <p className='number-copies paragraph'>
                Number of copies: {number}
            </p>
            <p className='writer-name paragraph'>
                Writer's Name: {writer}
            </p>
            {
                assignMore &&
                <div>
                    <p className='assign-more-txt'>
                        do you want to assign this book for more employees?
                    </p>
                    <div className='answer-container'>
                        <p
                            className='answer-txt'
                            onClick={showAssignExtra}
                        >
                            yes
                        </p>
                        <p 
                            className='answer-txt'
                            onClick={closeAssignExtra}
                        >
                            no
                        </p>
                    </div>
                </div>
            }

        </div>
    )
}