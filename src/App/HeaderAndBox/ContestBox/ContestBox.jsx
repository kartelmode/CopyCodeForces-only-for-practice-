import React from 'react'
import ContestBoxStyle from './ContestBox.module.css'
import ViewContent from './ViewContent/ViewContent';
import Search from './Search/Search';

export default function ContestBox() {
  const Content = [{
                  name: "ГЛАВНАЯ",
                  link: "https://codeforces.com/"
                }, {
                  name: "ТОП",
                  link: "https://codeforces.com/top"
                }, {
                  name: "КАТАЛОГ",
                  link: "https://codeforces.com/catalog"
                }, {
                  name: "СОРЕВНОВАНИЯ", 
                  link: "https://codeforces.com/contests"
                }, {
                  name: "ТРЕНИРОВКИ",
                  link: "https://codeforces.com/gyms"
                }, {
                  name: "АРХИВ",
                  link: "https://codeforces.com/problemset"
                }, {
                  name: "ГРУППЫ",
                  link: "https://codeforces.com/groups"
                }, {
                  name: "РЕЙТИНГ",
                  link: "/ratings"
                }, {
                  name: "EDU",
                  link: "https://codeforces.com/edu/courses"
                }, {
                  name: "API",
                  link: "https://codeforces.com/apiHelp"
                }, {
                  name: "КАЛЕНДАРЬ",
                  link: "https://codeforces.com/calendar"
                }, {
                  name: "ПОМОЩЬ",
                  link: "https://codeforces.com/help"
                }];
  return (
    <div className = {ContestBoxStyle.contestBox}>
      <ul className = {ContestBoxStyle.ul}>
        {Content.map((item, index) => (
          <ViewContent name = {item.name} link = {item.link} key = {index} />
        ))}
        <Search/>
      </ul>
    </div>
  )
}
