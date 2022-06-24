import React from 'react'
import MainInfo from './MainInfo/MainInfo.jsx'
import UserInfoStyle from './UserInfo.module.css'

export default function UserInfo({userInfo}) {
  return (
    <div className = {UserInfoStyle.userInfo}>
        <MainInfo rank = {userInfo.rank} handle = {userInfo.handle} lastName = {userInfo.lastName}
                  firstName = {userInfo.firstName} country = {userInfo.country} city = {userInfo.city} organization = {userInfo.organization} />
    </div>
  )
}
