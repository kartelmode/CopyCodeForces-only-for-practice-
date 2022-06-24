import React from 'react'
import FlagsStyle from './Flags.module.css'

export default function Flags() {
  return (
    <div className={FlagsStyle.flags}>
      <img src='https://cdn.codeforces.com/s/66232/images/flags/24/gb.png' alt='USA'/>
      <img alt='Russia' src='https://cdn.codeforces.com/s/66232/images/flags/24/ru.png'/>
    </div>
  )
}
