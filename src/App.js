import './App.css';

import Todo from './containers/todo/Todo';

function App() {

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const lastDay = new Date(year, month, 0);

  console.log('Date --> ', date)
  console.log('Year -->', year)
  console.log('Moth -->', month)
  console.log('Last day --> ', lastDay.getDate())

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
