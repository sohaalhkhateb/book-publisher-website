import { useContext, useId, useState } from 'react';
import { BookStatus } from '../lib/BookStatus'
import api from '../lib/axios';

export function Status({ statusValue, id }) {

    const [open, setOpen] = useState(false);

    const listId = useId()
    const anchorName = '--' + listId.replaceAll(':', '')


    function handleClick(e) {
        e.stopPropagation()
        setOpen(!open)
    }
    function getColor(statusValue) {
        switch (statusValue) {
            case 'need translation':
                return "#808080"
            case 'need copyEditing':
                return "#0da00d"
            case 'need typeSetting':
                return "#1515c8"
            case 'need proofReading':
                return "#c814c8"
            case 'ready for printing':
                return "#c3c314"
        }
    }
    return (
        <>
            <style>
                {`
          .status-val-${listId}{ 
          font-weight :bold;
            color : ${getColor(statusValue)} ;
            background-color:${getColor(statusValue)}5e;
            padding : 3px 5px;
            border-color :${getColor(statusValue)};
            border-radius:10px;
            border-bottom:3px solid ;
            margin-left :4px;
            anchor-name:${anchorName};
            
        `}
            </style>
            <button className={'status-val-' + listId}
                onClick={handleClick}
            >
                {statusValue}
            </button>
            <StatusSelector
                positionAnchor={anchorName}
                open={open}
                setOpen={setOpen}
                statusValue={statusValue}
                id={id}
            />
        </>
    )
}

function StatusSelector({ id, statusValue, open, setOpen, positionAnchor }) {
    const [statusUpdate, setStatusUpdate] = useContext(BookStatus);
    const [selectedState, setSelectedState] = useState(statusValue);

    function handleClick(e) {
        e.preventDefault();
        setSelectedState(e.target.value)
        e.stopPropagation()
        api.patch(`/books/status/${id}`, { 'bookStatus': e.target.value })
            .then((response) => {
                if (response.data.success) {
                    setOpen(false)
                    setStatusUpdate(!statusUpdate);

                }
            })
            .catch((error) => {
                console.log(error.response.data)
                setOpen(false)
            })

    }
    return (
        open && (
            <select
                style={{
                    position: 'fixed',
                    positionAnchor: positionAnchor,
                    positionArea: 'bottom',
                    zIndex: 1000,
                    borderRadius: '10px',
                    border: 'none',
                    padding: '10px 5px',
                    backgroundColor: '#40b1dbae'
                }}
                onClick={e => e.stopPropagation()}
                name='bookStatus'
                value={selectedState}
                onChange={handleClick}
            >
                <option value="need translation">need translation</option>
                <option value="need copyEditing">need copyediting</option>
                <option value="need typeSetting">need typesetting</option>
                <option value="need proofReading">need proofReading</option>
                <option value="ready for printing">ready for printing</option>
            </select>
        )
    )
}