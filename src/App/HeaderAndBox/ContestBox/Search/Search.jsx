import React, { useState } from 'react'
import SearchStyle from './Search.module.css'

export default function Search() {
    const [inputText, setInputText] = useState("")

    function handleChange(event) {
        setInputText(event.target.value);
    }

    return (
        <input className = {SearchStyle.input} value = {inputText} onChange={handleChange} />
    )
}
