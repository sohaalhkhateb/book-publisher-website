import { Link, useNavigate } from "react-router";
import personImage from '../../assets/images/icons/account.png'
import logoutImage from '../../assets/images/icons/logout.png'
import { SearchInput } from '../../components/SearchInput'
import menuImage from '../../assets/images/icons/menu.png'
import { Button } from "../../components/Button";
import api from "../../lib/axios";
import books from '../../assets/images/icons/books.png'

export function Header({ setShowOptionList, showOptionList, empty = false }) {
  const navigate = useNavigate('');

  function showOption(event) {
    event.stopPropagation();
    setShowOptionList(!showOptionList);
  }

  if (empty)
    return (
      <div className="header-container">
        <div className="header-middle-section">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <img
              src={books}
              style={{
                width: '25px',
                height:'25px',
              }}
              alt=""
            />
            <Link className='web-name' to='/'>
              publishing house website
            </Link>
          </div>

        </div>
      </div>
    )
  else
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
            publisher
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
            onClick={async () => { await api.post('/logout', {}); navigate('/login') }}
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