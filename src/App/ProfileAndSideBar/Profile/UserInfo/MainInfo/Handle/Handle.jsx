import React from 'react'
import { Link } from 'react-router-dom'
import HandleStyle from './Handle.module.css'

export default function Handle({handle, style}) {
  return (
    <Link to = {`/profile/${handle}`} className={HandleStyle.handle}>
        <div className={style}>
            {handle}
        </div>
    </Link>
  )
}
