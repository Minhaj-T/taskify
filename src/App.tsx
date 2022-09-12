import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './components/model';

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
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} settodo={settodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
