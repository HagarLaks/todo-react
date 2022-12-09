import {TodoList} from './TodoList';

export function Main({items, onToggleAll, onDestroy, onChecked}){

    function handleToggleAll(event){
        onToggleAll(event.target.checked)
    }
     
    
    return(
        <section className="main">
            <input className="toggle-all"
                    onChange={handleToggleAll}
                    type="checkbox" />  
            <TodoList items={items}
                      onDestroy={onDestroy}
                      onChecked={onChecked}/>
        </section>
    )
}
