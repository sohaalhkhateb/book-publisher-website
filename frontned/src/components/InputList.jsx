import { useId } from "react"
import './InputList.css'

export function InputList({ label = null, options, value, setValue }) {
    const listId = useId()
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px'
                }}
            >
                <label className="input-list-label" htmlFor={listId}>
                    {label}
                </label>
                <select name="nameOFvalue" id={listId}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="input-list-select"
                >
                    {options.map((option, index) => {
                        return (
                            <option key={index} value={option.value ?? null}>{Object.keys(option)[0]}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}