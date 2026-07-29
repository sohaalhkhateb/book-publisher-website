import './SearchInput.css'
export function SearchInput({ type, placeholder, inputValue, inputOnChange, inputOnKeyDown, searchImage, ImageOnClick }) {
    return (
        <div className='search-input-container'>

            <input
                type={type}
                placeholder={placeholder}
                className='search-input'
                value={inputValue}
                onChange={inputOnChange}
                onKeyDown={inputOnKeyDown}
            />
            <img
                src={searchImage}
                className='search-input-image'
                alt=""
                onClick={ImageOnClick}
            />
        </div>
    )
}