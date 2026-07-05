import './Options.css'
import personIcon from '../assets/images/icons/user-icon.png'
import privecyIcon from '../assets/images/icons/privacy-icon.png'
import profileListIcon from '../assets/images/icons/account.png'
import lightThemeIcon from '../assets/images/icons/night-mode.png'
import darkThemeIcon from '../assets/images/icons/dark-mode.png'
import arrowList from '../assets/images/icons/right-arrow.png'
import arrowListDown from '../assets/images/icons/down-arrow.png'
import SettingIcon from '../assets/images/icons/setting.png'
import { Link } from 'react-router'
import { useState } from 'react'
import '../index.css'

export function Options({ showOptionList, setShowOptionList }) {
  const [showNotList, setShowNotList] = useState(false);
  const [showSetList, setShowSetList] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme",newTheme);
  }

  function toggleNotList() {
    setShowNotList(!showNotList);
  }
  function toggleSetList() {
    setShowSetList(!showSetList);
  }
  function hiddenOptions() {
    setShowOptionList(false);
  }
  function clickFun(event) {
    event.stopPropagation();
  }
  return (
    <div
      className={showOptionList ? 'options-container' : 'hidden-options'}
      onClick={clickFun}
    >
      <div className='options-header-container'>
        <div className='photo-name-container'>
          <img
            src={personIcon}
            className='options-person-icon'
            alt=""
          />
          <p className='options-user-name'>User Name</p>
        </div>
      </div>
      <ul className='options-list ul'>
        <li>
          <Link to='' className='options-link'>
            <p>
              Dashboard
            </p>
          </Link>
        </li>
        <li>
          <Link
            to=''
            className='notification-container options-link'
            onClick={toggleNotList}
          >
            <p>Notifications (4)</p>
            <img
              src={showNotList ? arrowListDown : arrowList}
              className='options-arrow-list'
              alt=""
            />
          </Link>

          <ul className={showNotList ? 'show-sub-list ul' : 'sub-list ul'}>
            <div className='sub-list-items'>
              <li>
                <Link to='' className='options-link'>
                  <p>
                    show notifications
                  </p>
                </Link>
              </li>
              <li>
                <Link to='' className='options-link'>
                  <p>
                    manage notification
                  </p>
                </Link>
              </li>
            </div>
          </ul>

        </li>
        <li>
          <Link to='' className='options-link'>
            <p>
              Projects
            </p>
          </Link>
        </li>
        <li>
          <Link to='' className='options-link'>
            <p>
              Tasks
            </p>
          </Link>
        </li>
        <li>
          <Link to='' className='options-link'>
            <p>
              Analytics
            </p>
          </Link>
        </li>
        <li>
          <Link
            to=''
            className='options-link'
            onClick={toggleSetList}
          >
            <div className='icon-and-txt'>
              <img
                src={SettingIcon}
                alt=""
                className='options-icon'
              />
              <p>
                Settings
              </p>
            </div>
            <img
              src={showSetList ? arrowListDown : arrowList}
              className='options-arrow-list'
              alt=""
            />
          </Link>

          <ul className={showSetList ? 'show-sub-list' : 'sub-list'}>
            <div className='sub-list-items'>
              <li>
                <Link to='' className='options-link'>
                  <div className='icon-and-txt'>
                    <img
                      src={profileListIcon}
                      alt=""
                      className='options-icon'
                    />
                    <p>
                      Profile
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='' className='options-link'>
                  <div 
                    onClick={toggleTheme}
                    className='icon-and-txt'
                  >
                    <img
                      src={theme === "light"? lightThemeIcon : darkThemeIcon}
                      alt=""
                      className='options-icon'
                    />
                    <p>
                      Switch to {theme === "light" ? "Dark" : "Light"} Theme
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='' className='options-link'>
                  <div className='icon-and-txt'>
                    <img
                      src={privecyIcon}
                      alt=""
                      className='options-icon'
                    />
                    <p>
                      Account
                    </p>
                  </div>
                </Link>
              </li>
            </div>
          </ul>

        </li>
      </ul>
      <Link to='' className='options-link'>
        <p className='options-logout-txt'>Logout</p>
      </Link>
    </div>
  )
}