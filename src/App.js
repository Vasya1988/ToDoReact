import './App.css';
import React, { useState } from 'react';

import Todo from './containers/todo/Todo';

function App() {

  const [date, setDate] = useState( new Date() ) 
  const [year, setYear] = useState( date.getFullYear() ) 
  const [month, setMonth] = useState( date.getMonth() ) 
  const [lastDay, setLastDay] = useState( new Date(year, month + 1, 0) ) 

  const amountOfWeek = () => {
    // Первый день текущего месяца
    let currentDay = new Date(year, month, 1);

    // Корректный номер дня недели
      let dayNum = currentDay.getDay() - 1;
      if (dayNum < 0) {
        dayNum = 6
      }

      // Счетчик недель
      let weeks = 0
      while (currentDay.getMonth() == month) {
        let i = 0;
        // create tr
        while (i < 7) {
          // create td

          // Проверять первую линию недель на пустые поля
          if (weeks == 0) {
            // Если счетчик i меьнше номера дня недели - поля пустые
            if (i < dayNum) {
              i++
              // td is empte ''
              continue;
            } else {
              // td is currentDat.getDate
              console.log(currentDay.getDate());
              currentDay.setDate(currentDay.getDate() + 1);
            }
          } else {
            // td is currentDat.getDate
            console.log(currentDay.getDate());
            currentDay.setDate(currentDay.getDate() + 1);
          }
          
          // Create td in tr
          i++
          if (currentDay.getDate() == lastDay) {
            break
          }
        }
        // add to table
        weeks++
      }
  }

  // const showDays = (week, day) => {
  //   let dayFlag = 0;
  //   let daysArray = [];
  //   let weekArray = [];


  //   while(dayFlag < lastDay.getDate()) {
  //     dayFlag++
  //     if (dayFlag <= 7) {
  //       daysArray.push(dayFlag);
  //     }
  //   }
    
  //   console.log(daysArray);

  //   return daysArray;
  // }
  
  
  // console.log('Date --> ', date)
  // console.log('Year -->', year)
  // console.log('Moth -->', month)
  // console.log('Last day --> ', lastDay.getDate())

  return (
    <div className="App">
      <Todo
        getDate={amountOfWeek}
      >
        
      </Todo>
    </div>
  );
}

export default App;
