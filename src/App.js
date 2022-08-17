import classes from './App.module.css';
import React, { useState, useEffect } from 'react';
import Todo from './containers/todo/Todo';


function App() {

  // ------------------ Calendar

  // Месяцы, для отображения в календаре
  const allMonth = [
    'January', 'Ferburay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ]
  // Объект даты
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(year, month + 1, 0);

  // Работаем в календаре с этой переменной
  const day = new Date(year, month, 1)
  // Сюда добавляем недели меяца
  let weekLines = [];
  // Счетчик количества недель
  let week = 0;

  // Рендер календаря
  const calendar = (taskDay) => {
    // Счетчик
    let i = 0;
    let active = 0;
    let notActive = 0;
    // Сюда добалвяем дни недели
    let dayLines = [];

    while (day.getMonth() === month) {
      // Дни недели
      const weekLenght = () => {
        // Выполнять, когда i и day.getDay() оба равны нулю, что бы сдвинуть пустые дни в первой неделе
        if ( i === day.getDay() ) {
          i = -7;
          while ( i < 0) {
            // Проверка первой недели
            if (week ==0) {
              // Заполняем пустые Td
              if (i < day.getDay()-1) {
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
          }
        } // while i<0

        // Выполнять в обычном порядке
        else {
          while(i < 7) {
            // Проверка первой недели
            if (week ==0) {
              // Заполняем пустые Td
              if (i < day.getDay()-1) {
                dayLines.push(<td key={i}></td>);
              } else {
                dayLines.push(<td className={activeColor(day)} key={i}>{day.getDate()}</td>)
                day.setDate(day.getDate() + 1);
              }
              // Заполняем Td
            } else {
              dayLines.push(<td className={activeColor(day)} key={i}>{day.getDate()}</td>)
              day.setDate(day.getDate() + 1);
            }
            // console.dir(dayLines[0]._owner)

            i++



            // currentDate.forEach((e, index) => {
            //   if (day.getDate() === Number(e.day) && day.getMonth() + 1 === Number(e.month) && day.getFullYear() === Number(e.year)) {
            //     dayLines.push(<td style={{background:'#5BDE60'}} key={`${active}- active`}>{day.getDate()}</td>)
            //     day.setDate(day.getDate() + 1);
            //     console.log('active')
            //   } else {
            //     dayLines.push(<td key={`${notActive} - not active`}>{day.getDate()}</td>)
            //     day.setDate(day.getDate() + 1);
            //     notActive = notActive + 1
            //   }
            // })




          } }// while i<7
        }
      // Замкнуть цикл (day.getMonth() === month)
      if(day.getDate() > lastDay.getDate()) {
        break
      }
      // Повторно вызывать, для добавления следующей недели
      weekLenght()
      week++
      return weekLines.push(<tr key={week}>{dayLines}</tr>), calendar()
    } // (day.getMonth() === month)

    // Последняя неделя, для удаления дней следующего месяца
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
    }
    // Убираем даты следующего месяца
    i++
    return weekLines
  } //


  // Смена цвета дня
  const activeColor = (day) => {
    let color;
    if (taskList.length > 0) {
      console.log('currentDaye > 0')
      taskList.filter((e) => {
        if (day.getDate() === Number(e.date.day) && day.getMonth() + 1 === Number(e.date.month) && day.getFullYear() === Number(e.date.year)) {
          console.log('check');
          color = classes.tdActive
        }
      })
    }
    return color
  }

  // Смена месяца
  const changeDate = (way) => {
    if (way === 'back') {
      setDate(new Date(year, month-1));

    } else if (way === 'forward') {
      console.log(way);
      setDate(new Date(date.getFullYear(), date.getMonth()+1))
    }
  }

  // Выделение нужной даты в календаре

  
  // ------------------ Calendar //

  // --------------------------------

  // ------------------ Task list

  const [taskList, setTaskList] = useState(new Array);
  // The function of add tasks
  const addTask = (taskName, date, isDate) => {
    if (taskName === '') {
      alert('Enter your task');
      return false
    } else {
      setTaskList([...taskList, {date: {day: isDate[2], month: isDate[1], year: isDate[0]}, name: taskName, id: createId(), completed: false}]);
    }
  }

  // The function of Create ID
  const createId = (currentId) => {
    const words = ['a', 'b', 'c', 'd', 'e'];
    const randomNumber = Math.floor(Math.random() * 1000);
    const randomWord = words[Math.floor(Math.random() * words.length + 1)];
    let getId = `${randomNumber}${randomWord}`;

    taskList.filter((e) => {
      if (getId === e.id) {
        return console.log('THe Filter from createID --> ', e.id)

      } 
    })
    console.log(getId)
    return getId
  }
  
  // The function of remove task
  const removeTask = (task) => {

    setTaskList(taskList.filter((event, number) => {
      if (event.id != task) {
        
        return event //event.id = number
      } else {
        console.log('Not equal')
      }
      // console.log(event)
    }))
    // setTaskList(taskList.splice(task-1, 1));
    // console.log('Id of delete --> ', task)
    
  }

 // ------------------ Task list //


  return (
    <div className="App">
      <Todo
        calendar={calendar}
        day={day.getDate()}
        changeDate={changeDate}
        allMonth={allMonth}
        month={day.getMonth()}
        year={year}
        addTask={addTask}
        taskList={taskList}
        setTaskList={setTaskList}
        removeTask={removeTask}
        createId={createId}
        // colorDate={colorDate}
      >
        
      </Todo>
    </div>
  );
  


 
}

export default App;