import React from 'react'
import ViewContentStyle from './ViewContent.module.css'

export default function ViewContent({name, link, index}) {
  return (
    <li key = {index} className = {ViewContentStyle.viewContent}>
        <a href = {link} className = {ViewContentStyle.aElement}>
            {name}
        </a> 
    </li>
  )
}
