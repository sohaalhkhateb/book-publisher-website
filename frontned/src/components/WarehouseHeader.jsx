import './WarehouseHeader.css';
import { headerItems } from '../backend-json/headerItems';
import { SearchInput } from './SearchInput';
import  searchImage  from '../assets/images/icons/search-icon.png';
import menuImage from '../assets/images/icons/menu.png';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

export function WarehouseHeader({ headerState, showOptionList, setShowOptionList, search, setSearch }) {
    const navigate = useNavigate();

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

    var title = headerState == 'inventory' ? headerItems[0].title
        :
        headerItems[1].title;
    var details = headerState == 'inventory' ? headerItems[0].details
        :
        headerItems[1].details;
    return (
        <div className='warehouse-header'>
            <div className='warehouse-header-right'>
                <p className='warehouse-header-title'>
                    {title}
                </p>
                <p className='warehouse-header-txt'>
                    {details}
                </p>
            </div>
            <SearchInput
                type="text"
                placeholder='search'
                inputValue={inputSearch}
                inputOnChange={updateInputSearch}
                inputOnKeyDown={checkInput}
                searchImage={searchImage}
                ImageOnClick={sendSearchInput}
            />
        </div>
    )
}