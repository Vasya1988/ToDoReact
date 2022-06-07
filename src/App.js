import './App.css';
import React, { useState } from 'react';

import Todo from './containers/todo/Todo';

function App() {

  const allMonth = [
    'January', 'Ferburay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(year, month + 1, 0);

  const day = new Date(year, month, 1)
  
  // const [dayNumber, setDayNumber] = useState(day.getDay() - 1);
  // if (dayNumber === 0) {
  //   dayNumber = 6;
  // }
  let weekLines = [];
  let week = 0;

  const calendar = () => {
    let i = 0;
    let dayLines = [];
    
    while (day.getMonth() === month) {
      // Дни недели
      const weekLenght = () => {
        while(i < 7) {
        // Проверка первой недели
        if (week ==0) {
          // Заполняем пустые Td
          if (i < day.getDay()-1) {
            if (month === 4) {
              console.log('May --> ', month)
            }
            // console.log(day.getDay())
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
      if(day.getDate() > lastDay.getDate()) {

        break
      }
      week++
      // console.log('DayNumber --> ', dayNumber)
      // console.log('Day --> ', day.getDate())
      // console.log('i --> ', i)
      changeDate()
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
    console.log('is i --> ', i)
    i++
    return weekLines
  } //

  const changeDate = (way) => {
    if (way === 'back') {
      console.log(way);
      setDate(new Date(year, month-1));

    } else if (way === 'forward') {
      console.log(way);
      setDate(new Date(date.getFullYear(), date.getMonth()+1))
    }
  }

  return (
    <div className="App">
      <Todo
        calendar={calendar}
        day={day.getDate()}
        changeDate={changeDate}
        allMonth={allMonth}
        month={day.getMonth()}
        year={year}
      >
        
      </Todo>
    </div>
  );
}

export default App;