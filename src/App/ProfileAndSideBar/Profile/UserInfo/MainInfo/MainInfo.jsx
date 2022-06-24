import React from 'react'
import MainInfoStyle from './MainInfo.module.css'
import Rank from './Rank/Rank.jsx'
import { ranksMap } from './RanksMap'
import Handle from './Handle/Handle.jsx'
import Person from './Person/Person.jsx'

export default function MainInfo({rank, handle, lastName, firstName, country, city, organization}) {
  let style = document.documentElement.style;
    function setColor() {
        let new_color = "black";
        if (rank !== undefined) {
            new_color = ranksMap.get(rank)
        }
        style.setProperty('--rank-color', new_color)
    }

  return (
    <div>
      {setColor()}
      <Rank rank = {rank} style = {MainInfoStyle.rank}/>
      <Handle handle = {handle} style = {MainInfoStyle.rank + ' ' + (rank === 'legendary grandmaster' ? MainInfoStyle.legendary : '')} />
      <Person firstName = {firstName} lastName = {lastName} country = {country} city = {city} organization = {organization}/>
    </div>
  )
}
