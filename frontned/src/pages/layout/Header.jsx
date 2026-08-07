import { Link, useNavigate } from "react-router";
import personImage from '../../assets/images/icons/account.png'
import logoutImage from '../../assets/images/icons/logout.png'
import {SearchInput } from '../../components/SearchInput'
import menuImage from '../../assets/images/icons/menu.png'
import { Button } from "../../components/Button";
import api from "../../lib/axios";

export function Header({setShowOptionList, showOptionList}) {
    const navigate = useNavigate ('');
    
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

                    <SearchInput
                        fallbackPage='/'
                        targetPage='books'
                    />

                </div> 
                <Button 
                    image={logoutImage}
                    text="logout"
                    onClickBtn={async()=>{await api.get('/logout');navigate('/login')}}
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