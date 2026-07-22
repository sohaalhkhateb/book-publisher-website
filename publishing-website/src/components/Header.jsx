import './Header.css'
import seaarchImage from '../assets/images/icons/search-icon.png'
import personImage from '../assets/images/icons/person-icon.png'
import menuImage from '../assets/images/icons/menu-icon2.png'
import bookImage from '../assets/images/icons/book-icon.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router'
import api from '../lib/axios'
export function Header({ showOptionList, setShowOptionList, setHomeProducts, searchBooks, setSearchBooks, setUser }) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search');
  const [inputSearch, setInputSearch] = useState(searchText || '');

  const [numberBooks, setNumberBooks] = useState('75');

  useEffect(() => {
    setInputSearch(searchText || '');
  }, []);

  /* useEffect(() => {
     const getNumberOfBooks = async () => {
       const response = await axios.get('');
       setNumberBooks(response.data);
     }
     getNumberOfBooks();
   }, []);
   */

  async function logout() {
    await api.get('logout')
      .then((response) => {
        if (response.data.success) {
          setUser(null);
          navigate('/login')
        }
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  const sortBooks = async () => {
    const response = await axios.get('');
    setHomeProducts(response.data);
  }

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
      setSearchBooks(false);
    }
  }
  const sendSearchInput = () => {
    setSearchBooks(true);
    navigate(`/?search=${inputSearch}`);
  }


  function showOption(event) {
    event.stopPropagation();
    setShowOptionList(!showOptionList);
  }
  function goBackToProducts() {
    setShowMainContent('books');
  }
  return (
    <div className='header-container'>
      <div
        className='header-left-section'
        onClick={goBackToProducts}
      >
        <img
          src={personImage}
          className='header-person-image'
          onClick={showOption}
          alt=""
        />
      </div>
      <div className='header-middle-section'>
        <p className='web-name'>Web Name</p>
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
        <button
          className='header-sort-button'
          onClick={sortBooks}
        >
          <p className='sort-paragraph'>Sort</p>
          <img
            src={bookImage}
            className='header-book-image'
            alt=""
          />
        </button>
        <button onClick={logout}>logout</button>
        <p className='number-book-paragraph'>
          number of books : {numberBooks}
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
