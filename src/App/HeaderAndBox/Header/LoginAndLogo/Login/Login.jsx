import React from 'react'
import LoginStyle from './Login.module.css'

export default function Login() {
  return (
    <div className={LoginStyle.Login}>
      <a href="https://codeforces.com/enter?back=%2Fprofile%2Fkartel%3Flocale%3Dru">Войти </a>
      |  
      <a href="https://codeforces.com/register"> Зарегистрироваться</a>
    </div>
  )
}
