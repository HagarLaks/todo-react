import './App.css';
import {Main} from './components/Main';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import { useEffect, useState } from 'react';



function App() {
     const [todos, setTodos] = useState([]);
     const [nonCompletedItemsCount, setnonCompletedItemsCount] = useState(0);


    //  useEffect(() => {
    //   fetch('https://jsonplaceholder.typicode.com/todos')
    //       .then( response => response.json())
    //       .then(setTodos)
    // }, []);

    
    useEffect(() => {
      const uncompleted = todos.filter( todo=> !todo.completed );
      setnonCompletedItemsCount(uncompleted.length)
    }, [todos])

    // useEffect(()=>{
    //   const currentState = completedState
    // })
         
    const appTitle = 'TodosApp';

    // Events
    const addTodo = (title) => {
      const newTodos =  todos.concat({id: Date.now(),title, completed: false})
      setTodos(newTodos);
    }
  
    const removeTodo = (todoToRemove) => {
        // console.log(todoToRemove)
        // console.log(todos.map(item=>item.id))
        // console.log(todos.filter(currentTodo=>currentTodo.id!==todoToRemove))
        // console.log(typeof(todos[0].id))
        // console.log(typeof(todoToRemove.id))
        const todosAfterRemove = todos.filter(currentTodo => `${currentTodo.id}` !== todoToRemove.id);
        setTodos(todosAfterRemove);
        
    }
  
    // todo: where should we implemnt it?
    const markAsCompleted = (itemToMarkAsCompleted) => {
        itemToMarkAsCompleted.completed = !itemToMarkAsCompleted.completed;
        setTodos([...todos])
    }
  
    const clearAllCompletedItems = () => {
      const   todosAfterClearedCompleated = todos.filter( currentTodo => !currentTodo.completed );
      console.log(todosAfterClearedCompleated);
      setTodos(todosAfterClearedCompleated);

    }
  
    const toggleAllItems = (checkedValue) => {
      const todosAfterToggleAll = todos.map( todo => ({ ...todo, completed: checkedValue }));
      // todos = todos.map( todo => Object.assign({}, todo, {completed: checkedValue}));
      console.log(todosAfterToggleAll);
      setTodos(todosAfterToggleAll);

    }
  
    // todo: pass title, placeholder to header
    // todo: pass item left to footer
    
    // todo: BONUS THINK ABOUT EDIT IN PLACE (DOUBLE CLICK TO VHANGE ITEM)

    return (
        <section className="todoapp">
          <Header title={appTitle}
                  onAddItem={addTodo}
                  text="What needs to be done?"  />
          <Main items={todos}
                onToggleAll={toggleAllItems}
                onDestroy={removeTodo} 
                onChecked={markAsCompleted}/>
          <Footer 
                  itemLeftCount ={nonCompletedItemsCount}
                  onClearCompleted={clearAllCompletedItems}/>
        </section>
    )
  

}

export default App;
