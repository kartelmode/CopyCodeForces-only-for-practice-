import React from 'react'
import LogoStyle from "./Logo.module.css"

export default function Logo() {
  return (
    <div className={LogoStyle.LogoImg}>
      <img alt='Logo' src="https://cdn.codeforces.com/s/42286/images/codeforces-logo-with-telegram.png"/>
    </div>
  )
}
