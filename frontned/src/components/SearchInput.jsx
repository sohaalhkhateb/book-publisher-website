import { useLocation, useNavigate } from 'react-router';
import searchImage from '../assets/images/icons/search-icon.png'
import { useState } from 'react';
import './SearchInput.css'

export function SearchInput() {
    const location = useLocation()
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function go(event) {
        if (event.key == 'Escape') {
            setSearch('');
        }
        if (event.key == 'Enter') {
            navigate(search ? `${location.pathname}?search=${search}` : location.pathname)
        }
    }

    return (
        <div className='search-input-container'>

            <input
                type='search'
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
                onClick={() => navigate(search ? `${location.pathname}?search=${search}` : location.pathname)
                }
            />
        </div>
    )
}