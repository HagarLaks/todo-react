import {useContext} from "react";
import {ListContext} from "../providers/list-context";

export function TodosList() {
  const {todos, removeTodo} = useContext(ListContext);

  return (
      <ul className="todo-list">
        { todos.map( item => (
            <li className='' key={item.id}>
              <div className="view">
                <input className="toggle"
                       type="checkbox"/>
                <label>{item.title}</label>
                <button onClick={() => removeTodo(item)} className="destroy"/>
              </div>
              <input className="edit" />
            </li>
        ))}
      </ul>
  );
}