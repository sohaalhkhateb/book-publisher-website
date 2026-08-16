import { useId } from "react"

export function InputList({ label = null, options, value, setValue }) {
    const listId = useId()
    return (
        <>
            <label htmlFor={listId}>
                {label}
            </label>

            <select name="nameOFvalue" id={listId}
                value={value}
                onChange={(e) => setValue(e.target.value)}>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value??null}>{Object.keys(option)[0]}</option>
                    )
                })}
            </select>
        </>
    )
}