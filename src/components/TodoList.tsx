import { Todo } from './model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos, settodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          todos={todos}
          settodos={settodos}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
