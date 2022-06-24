import React from 'react'
import Logo from './Logo/Logo.jsx'
import HeaderStyle from './Header.module.css'
import LoginAndLang from './LoginAndLang/LoginAndLang.jsx'

export default function Header() {
  return (
    <div className = {HeaderStyle.Header}>
        <Logo/>
        <LoginAndLang/>
    </div>
  )
}
