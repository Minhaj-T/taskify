import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, settodo] = useState<string>('');
  const [todos, settodos] = useState<Todo[]>([]);

  function clearInput() {
    settodo('');
  }

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      settodos([...todos, { id: Date.now(), todo, isDone: false }]);
      clearInput();
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} settodo={settodo} handleAdd={handleAdd} />
      <TodoList todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
