import './App.css';
import React, { useState } from 'react';

import Todo from './containers/todo/Todo';

function App() {

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(year, month + 1, 0);

  const day = new Date(year, month, 1)
  
  const dayNumber = day.getDay() - 1;
  if (dayNumber === 0) {
    dayNumber = 6;
  }
  let weekLines = [];
  let week = 0;

  const calendar = () => {
    let dayLines = [];
    let weekRender = []
    
    while (day.getMonth() == month) {
      let i = 0;
      // Дни недели
      const weekLenght = () => {while(i < 7) {
        // Проверка первой недели
        if (week ==0) {
          // Заполняем пустые Td
          if (i < dayNumber) {
            dayLines.push(<td key={i}></td>);
          } else {
            dayLines.push(<td key={i}>{day.getDate()}</td>)
            day.setDate(day.getDate() + 1);
          }
          // Заполняем Td
        } else {
            dayLines.push(<td key={i}>{day.getDate()}</td>)
            day.setDate(day.getDate() + 1);
        }
        i++
      } }//
      weekLenght()
      if(day.getDate() == lastDay.getDate()) {
        
        break
      }
      week++
      
      return weekLines.push(<tr key={week}>{dayLines}</tr>), calendar()

    } //
    const lastWeekArray = Array.from(weekLines[weekLines.length-1].props.children);
 
    // Убираем даты следующего месяца
    lastWeekArray.filter((e) => {
      if (e.props.children < 7) {
        weekLines[weekLines.length-1].props.children.pop();
      }
    }) //
    while(weekLines[weekLines.length-1].props.children.length < 7) {
      let flag = weekLines[weekLines.length-1].props.children.length;
      weekLines[weekLines.length-1].props.children.push(<td key={flag}></td>);
      // console.log(weekLines[weekLines.length-1].props.children)
    }
    // Убираем даты следующего месяца



    
    
    return weekLines
    
    
  }
  

  const changeDate = (way) => {
    console.log(way)
  }

  return (
    <div className="App">
      <Todo
        calendar={calendar}
        day={day.getDate()}
        changeDate={changeDate}
      >
        
      </Todo>
    </div>
  );
}

export default App;