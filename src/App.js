import classes from './App.module.css';
import React, { useState, useEffect } from 'react';
import Todo from './containers/todo/Todo';
import Task from './components/task/Task';


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
                dayLines.push(<td style={{cursor: 'default',opacity:0}} key={i}></td>);
              } else {
                dayLines.push(<td onClick={(item)=>{
                  setGetDay(Number(item.target.innerText))
                  setFlag(()=>{
                    if (flag === false) {
                      return true
                    } else {
                      return false
                    }
                  })

                }}  key={i}>{day.getDate()}</td>)
                day.setDate(day.getDate() + 1);
              }
              // Заполняем Td
            } else {
                dayLines.push(<td onClick={(item)=>{
                  setGetDay(Number(item.target.innerText))
                  setFlag(()=>{
                    if (flag === false) {
                      return true
                    } else {
                      return false
                    }
                  })
                }}  key={i}>{day.getDate()}</td>)
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
                dayLines.push(<td style={{cursor: 'default',opacity:0}} key={i}></td>);
              } else {
                dayLines.push(<td onClick={(item)=>{
                  setGetDay(Number(item.target.innerText))
                  setFlag(()=>{
                    if (flag === false) {
                      return true
                    } else {
                      return false
                    }
                  })
                }} className={activeColor(day)} key={i}>{day.getDate()}</td>)
                day.setDate(day.getDate() + 1);
              }
              // Заполняем Td
            } else {
              dayLines.push(<td onClick={(item)=>{
                setGetDay(Number(item.target.innerText))
                
                setFlag(()=>{
                  if (item.target.className != '' && flag === false) {
                    console.log(item.target.className)
                    return true
                  } else {
                    return false
                  }
                })
              }}  className={activeColor(day)} key={i}>{day.getDate()}</td>)
              day.setDate(day.getDate() + 1);
            }
            // console.dir(dayLines[0]._owner)
            i++
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
      weekLines[weekLines.length-1].props.children.push(<td style={{cursor: 'default',opacity:0}} key={flag}></td>);
    }
    // Убираем даты следующего месяца
    i++
    return weekLines
  } //

  // Смена цвета дня в календаре
  const activeColor = (day) => {
    let color;
    if (taskList.length > 0) {
      // console.log('currentDaye > 0')
      taskList.filter((e, index) => {
        if (day.getDate() === Number(e.date.day) && day.getMonth() + 1 === Number(e.date.month) && day.getFullYear() === Number(e.date.year)) {
          // console.log('check');
          color = classes.tdActive;
        }
      })
    }
    return color
  }
  // onClick - ловим день со страницы календаря
  const [getDay, setGetDay] = useState();
  // Флаг показать/скрыть задачи по клику на дату
  const [flag, setFlag] = useState(false);

  // Смена месяца
  const changeDate = (way) => {
    if (way === 'back') {
      setDate(new Date(year, month-1));

    } else if (way === 'forward') {
      console.log(way);
      setDate(new Date(date.getFullYear(), date.getMonth()+1))
    }
  }
  
  // ------------------ Calendar //

  // --------------------------------

  // ------------------ Task list

  // Хук который хранит список задач
  const [taskList, setTaskList] = useState(new Array);
  // The function of add tasks
  const addTask = (taskName, date, isDate) => {
    isDate = isDate || ['no date', 'no date', 'no date']
    if (taskName === '') {
      alert('Enter your task');
      return false
    } else {
      setTaskList([...taskList, {date: {day: isDate[2], month: isDate[1], year: isDate[0]}, name: taskName, id: createId(), completed: false}]);
    }
  }

  // Хук который хранит завершенные задачи
  const [taskDone, setTaskDone] = useState(new Array);
  console.log('Task done --> ', taskDone)
  const changeTaskStatus = (taskId) => {

    setTaskList(taskList.filter((event, number) => {
      if (event.id != taskId) {
        return event //event.id = number
      } else {
        setTaskDone([...taskDone, event])
        console.log('Not equal')
      }
    }))
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
  const removeTask = (taskId) => {
    setTaskList(taskList.filter((event, number) => {
      if (event.id != taskId) {
        return event //event.id = number
      } else {
        console.log('Not equal')
      }
    }))
  }

  // The function of remove task Done
  const removeTaskDone = (taskId) => {
    setTaskDone(taskDone.filter((event, number) => {
      if (event.id != taskId) {
        return event //event.id = number
      } else {
        console.log('Not equal')
      }
    }))
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
        removeTaskDone={removeTaskDone}
        createId={createId}
        getDay={getDay}
        flag={flag}
        setFlag={setFlag}
        changeTaskStatus={changeTaskStatus}
        taskDone={taskDone}
        // colorDate={colorDate}
      >
        
      </Todo>
    </div>
  );
  


 
}

export default App;