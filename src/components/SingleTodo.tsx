import React, { useEffect, useRef, useState } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [edit, setedit] = useState<boolean>(false);
  const [editTodo, seteditTodo] = useState<string>(todo.todo);

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

  //* Todo Edit Section
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    settodos(
      todos.map((item) => (item.id === id ? { ...item, todo: editTodo } : item))
    );
    setedit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => seteditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <span
        className="icon"
        onClick={() => {
          if (!edit && !todo.isDone) {
            setedit(!edit);
          }
        }}
        aria-hidden="true"
        role="button"
        tabIndex={todo.id}
      >
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
