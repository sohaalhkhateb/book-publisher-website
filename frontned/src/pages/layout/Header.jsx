import { Link, useNavigate } from "react-router";
import { useState } from "react";
import personImage from '../../assets/images/icons/account.png'
import searchImage from '../../assets/images/icons/search-icon.png'
import logoutImage from '../../assets/images/icons/logout.png'
import menuImage from '../../assets/images/icons/menu.png'
import { Button } from "../../components/Button";
import api from "../../lib/axios";

export function Header({setShowOptionList, showOptionList}) {
    const [inputSearch, setInputSearch] = useState('');
    const navigate = useNavigate();


    function go(event) {
        if (event.key == 'Escape') {
            setInputSearch('');
        }
        if (event.key == 'Enter') {
            navigate(inputSearch ? `results?query=${inputSearch}` : '/')
        }
    }
    function showOption(event) {
        event.stopPropagation();
        setShowOptionList(!showOptionList);
    }

    return (

        <div className="header-container">
            <Link className='header-left-section' to='/settings'>
                <img
                    src={personImage}
                    className='header-person-image'
                />
            </Link>

            <div className="header-middle-section">
                <Link className='web-name' to='/'>
                    web Name
                </Link>

                <div className='header-search-section'>
                    <input
                        type="text"
                        placeholder='search'
                        className='header-search-bar'
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                        onKeyDown={go}
                    />
                    <img
                        src={searchImage}
                        className='header-search-image'
                        alt=""
                        onClick={() => navigate(inputSearch ? `results?query=${inputSearch}` : '/')}
                    />
                </div> 
                <Button 
                    image={logoutImage}
                    text="logout"
                    onClickBtn={async()=>{await api.get('/logout')}}
                />
                
                
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