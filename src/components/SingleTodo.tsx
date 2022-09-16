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
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <span className="icon">
        <AiFillEdit />
      </span>
      <span className="icon">
        <AiFillDelete />
      </span>
      <span className="icon">
        <MdDone />
      </span>
    </form>
  );
};

export default SingleTodo;
