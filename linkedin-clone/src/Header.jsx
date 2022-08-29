/* eslint-disable react/jsx-no-undef */
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './Header.css'
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';



function Header() {
  
  const dispatch = useDispatch()
  
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()

  }

  return (
    <div className='header'>
        <div className="header__left">

            <img src="linkedin-svgrepo-com.svg"  alt="" />

            <div className="header__search">
                <SearchIcon  />
                <input placeholder='Search...' type="text" />
            </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title='Home' />
          <HeaderOption Icon={SupervisorAccountIcon} title='my network' />
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
          <HeaderOption Icon={ChatIcon} title='Messaging' />
          <HeaderOption Icon={Notifications} title='Notifications' />
          <HeaderOption 
          avatar={true} 
          title='me' 
          onClick={logoutOfApp}
          />

        </div>
    </div>
  )
}

export default Header