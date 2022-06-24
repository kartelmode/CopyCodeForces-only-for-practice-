import React from 'react'
import AvatarStyle from './Avatar.module.css';

export default function Avatar({imageSrc}) {
  return (
    <div className = { AvatarStyle.root }>
        <img src = {imageSrc}/>
    </div>
  )
}
