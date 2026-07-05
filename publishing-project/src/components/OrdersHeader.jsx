import seaarchImage from '../assets/images/icons/search-icon.png'
import personImage from '../assets/images/icons/person-icon.png'
import menuImage from '../assets/images/icons/menu-icon2.png'
import { useState, useEffect } from 'react'
import { NavLink, useSearchParams } from 'react-router'

export function OrdersHeader({ showOptionList, setShowOptionList, search, setSearch }) {

    const [searchParams] = useSearchParams();
    const searchText = searchParams.get('search');
    const [inputSearch, setInputSearch] = useState(searchText || '');

    useEffect(() => {
        setInputSearch(searchText || '');
    }, []);

    const updateInputSearch = (event) => {
        setInputSearch(event.target.value);
    }
    function checkInput(event) {
        if (event.key == 'Escape') {
            setInputSearch('');
        }
        if (event.key == 'Enter') {
            sendSearchInput();
        }
        if (event.key == 'Enter' && inputSearch == '') {
            navigate('/');
            setSearch(false);
        }
    }
    const sendSearchInput = () => {
        setSearch(true);
        navigate(`/?search=${inputSearch}`);
    }


    function showOption(event) {
        event.stopPropagation();
        setShowOptionList(!showOptionList);
    }
    return (
        <div className="header-container">
            <NavLink
                className='header-left-section'
                to='/'
            >
                <img
                    src={personImage}
                    className='header-person-image'
                    onClick={showOption}
                    alt=""
                />
            </NavLink>
            <div className='header-middle-section'>
                <NavLink
                    className='web-name'
                    to='/'
                >
                    Web Name
                </NavLink>
                <div className='header-search-section'>
                    <input
                        type="text"
                        placeholder='search'
                        className='header-search-bar'
                        value={inputSearch}
                        onChange={updateInputSearch}
                        onKeyDown={checkInput}
                    />
                    <img
                        src={seaarchImage}
                        className='header-search-image'
                        alt=""
                        onClick={sendSearchInput}
                    />
                </div>
                <p className='number-book-paragraph'>
                    number of orders : 22
                </p>
            </div>
            <div className='header-right-section'>
                <button className='menu-button' title="Menu">
                    <img
                        src={menuImage}
                        className='header-menu-image'
                        alt=""
                        onClick={showOption}
                    />
                </button>
            </div>
        </div>
    )
}