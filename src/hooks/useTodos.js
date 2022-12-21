import {useEffect, useRef, useState} from "react";

export function useTodos(){

    const [todos, setTodos] = useState([]);
    const [nonCompletedItemsCount, setnonCompletedItemsCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then( response => response.json())
        //     .then((todos) => setTodos(todos))
      }, []);

      useEffect(() => {
        const uncompleted = todos.filter( todo=> !todo.completed );
        setnonCompletedItemsCount(uncompleted.length)
      }, [todos])

      // Events
      const addTodo = (title) => {
        if(countRef.current > 3) {
          alert('You reached the limit!')
          return;
        }
        const newTodos = todos.concat([{ id: Date.now(), title, completed: false }])
        countRef.current += 1;
        setTodos(newTodos);
      }

      const removeTodo = (todoToRemove) => {
        const updatedTodos = todos.filter( currentTodo => currentTodo.id !== todoToRemove.id );
        setTodos(updatedTodos);
      }
  
    const markAsCompleted = (itemToMarkAsCompleted) => {
        itemToMarkAsCompleted.completed = !itemToMarkAsCompleted.completed;
        setTodos([...todos])
    }

    const clearAllCompletedItems = () => {
      const updatedTodos = todos.filter( currentTodo => !currentTodo.completed );
      setTodos(updatedTodos);
    }

    const toggleAllItems = (checkedValue) => {
    const updtaedTodos = todos.map( todo => ({ ...todo, completed: checkedValue }));
    setTodos(updtaedTodos)
  }
      return(
        todos,
        nonCompletedItemsCount,
        addTodo,
        removeTodo,
        toggleAllItems,
        clearAllCompletedItems,
        markAsCompleted
      )


}
