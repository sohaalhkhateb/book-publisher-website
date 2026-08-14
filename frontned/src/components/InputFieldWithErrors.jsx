import { useId } from 'react'
import './InputFieldWithErrors.css'
export default function InputFieldWithErrors({ type, name, error, value, setValue, message = '', required = true, color = null }) {
    const inputId = useId();
    
    
    return (
        <div className='input-astrisk-container'>
            <div className='input-container' style={{ "--bg-color": color ?? 'rgb(101, 101, 230)' }}>
                <label className='input-label' htmlFor={inputId}>
                    • {message ? message :
                        name.includes('confirmation') ? `confirm your ${type}:` :
                            `enter your ${name} here :`
                    }
                </label>
                <input
                    className={error ? 'input-field errored' : 'input-field'}
                    id={inputId}
                    type={type}
                    placeholder={(name.includes('confirmation') ? `${type} confirmation...` : `${name}...`)}
                    value={type == 'file' ? undefined : value}
                    name={name}
                    onChange={e => {
                        type == 'file' ?
                            setValue(e.target.files[0]) :
                            setValue(e.target.value)
                    }
                    }
                />
                {error && (<p className=' input-error'>{error}</p>)}
            </div>

            <p className='astrisk'>
                {required && '*'}
            </p>
        </div>
    )
}



