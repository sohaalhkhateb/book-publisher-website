import { useId } from 'react'
import './InputFieldWithErrors.css'
export default function InputFieldWithErrors({type,name,error,value,setValue}) {
    const inputId = useId();
    return (
        <div className='input-container'>
            <label className='input-label' htmlFor={inputId}>{name.includes('confirmation')?`confirm your ${type}:`:`enter your ${name} here :`}</label>
            <input 
                className={error?'input-field errored':'input-field'}
                id={inputId}
                type={type}
                placeholder={name.includes('confirmation')?`${type} confirmation...`:`${name}...`}
                value={value}
                name={name}
                onChange={e => setValue(e.target.value)}
            />
            {error && (<p className=' input-error'>{error}</p>)}
        </div>
    )
}



