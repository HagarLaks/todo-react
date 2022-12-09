
export function Header(props){

    // function addTodo(event){
    //     let taskTextInput = event.target.value;

    //     if (taskTextInput.trim().length===0){
    //     }
    //         else if (event.key === 'Enter'){
    //             console.log(taskTextInput);
                
    //             taskTextInput = '';
    //             console.log(taskTextInput);
    //     }
        
    // }
    function handleTaskInput(event){
        if(event.key === 'Enter'){
            let newItem = event.target.value
            props.onAddItem(newItem)
            

        }

    }
    
    return(

            <header className="header">
            <h1>{props.title}</h1>
            <input className="new-todo"
                    placeholder="What needs to be done?"
                    onKeyDown={handleTaskInput}
                    autoFocus />
            </header>
    )
}
