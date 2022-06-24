import React from 'react'
import Profile from './Profile/Profile.jsx'
import {Route, Routes} from 'react-router-dom'
import ProfileAndSideBarStyle from './ProfileAndSideBar.module.css'

export default function ProfileAndSideBar() {
  return (
    <div className = {ProfileAndSideBarStyle.root}>
        <Routes>
            <Route path = '/' element = {<Profile/>}/>
            <Route path = '/profile/:user' element = {<Profile/>}/>
        </Routes>
    </div>
  )
}
