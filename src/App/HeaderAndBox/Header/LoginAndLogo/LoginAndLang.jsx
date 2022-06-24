import React from 'react'
import Flags from './Flags/Flags'
import Login from './Login/Login'
import LoginAndLangStyle from './LoginAndLang.module.css'

export default function LoginAndLang() {
  return (
    <div className = {LoginAndLangStyle.loginAndLang}>
        <Flags/>
        <Login/>
    </div>
  )
}
