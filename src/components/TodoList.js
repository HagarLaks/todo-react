// import { isTemplateSpan } from "typescript";

export function TodoList({items, onDestroy, onChecked}) {
    function handleDestroyClick(event){
        // if (event.target.attributes.class.value==='destroy'){
            // console.log(typeof(event.target.parentNode))
            onDestroy(event.target.parentNode)
        // }
        // console.log(event.target.attributes.class.value)
        
        
    }
    function handleCheckBox (event){
        const todoItem = event.target
        if (todoItem.checked === true){
            todoItem.parentNode.parentNode.className = 'completed'
            // item.completed =true
        }
         else {
            todoItem.parentNode.parentNode.className = ''
            // item.completed =false

        }
        


    }
    return (
    <ul className="todo-list">
        {items.map( item => (
            <li className={
                (item.completed ? "completed" : "")}>
                <div id={item.id} className="view">
                    <input  className="toggle"
                            onClick={() => onChecked(item)}
                            type="checkbox" 
                            checked={item.completed}/>
                    <label>{item.title}</label>
                    <button className="destroy"
                            onClick={handleDestroyClick}/>
                </div>
                    <input className="edit" />
            </li>
        ))}
        </ul>
    );
  }
 
  
