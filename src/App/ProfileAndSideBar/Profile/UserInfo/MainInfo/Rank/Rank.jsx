import React from 'react'
import { useEffect } from 'react'
import RankStyle from './Rank.module.css'

export default function Rank({rank, style}) {
  return (
    <div id = 'rank' className={style + ' ' + RankStyle.rank}>
        {rank}
    </div>
  )
}
