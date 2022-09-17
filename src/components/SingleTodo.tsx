import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Todo } from './model';
import './styles.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, settodos }: Props) => {
  //* Todo Done Section
  const handleDone = (id: number) => {
    settodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  //* Todo Delete Section
  const handleDelete = (id: number) => {
    settodos(todos.filter((item) => item.id !== id));
  };
  return (
    <form className="todos__single">
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <span className="icon">
        <AiFillEdit />
      </span>
      <span
        className="icon"
        onClick={() => handleDelete(todo.id)}
        onKeyPress={() => handleDone(todo.id)}
        role="button"
        tabIndex={todo.id}
      >
        <AiFillDelete />
      </span>
      <span
        className="icon"
        onClick={() => handleDone(todo.id)}
        onKeyPress={() => handleDone(todo.id)}
        role="button"
        tabIndex={todo.id}
      >
        <MdDone />
      </span>
    </form>
  );
};

export default SingleTodo;
