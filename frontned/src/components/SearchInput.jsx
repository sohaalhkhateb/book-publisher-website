import { useNavigate } from 'react-router';
import searchImage from '../assets/images/icons/search-icon.png'
import { useState } from 'react';
import './SearchInput.css'

export function SearchInput({ targetPage, fallbackPage }) {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function go(event) {
        if (event.key == 'Escape') {
            setSearch('');
        }
        if (event.key == 'Enter') {
            navigate(search ? `/?search=${search}` : fallbackPage)
        }
    }
    
    return (
        <div className='search-input-container'>

            <input
                type='text'
                placeholder='search'
                className='search-input'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={go}
            />
            <img
                src={searchImage}
                className='search-input-image'
                alt=""
                onClick={() => navigate(search ? `/?search=${search}` : fallbackPage)}
            />
        </div>
    )
}