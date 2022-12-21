import {useTodos} from "../hooks/useTodos";
import {Header} from "./Header";
import {ToggleAll} from "./ToggleAll";
import {TodosList} from "./TodosList";
import {Footer} from "./Footer";
import {ListContext} from "../providers/list-context";
import {AuthContext} from "../providers/auth-context";

export function TodosApp({appName}) {
  const todoApi = useTodos();

  const currentUser = {name: 'Nir', role: 'admin'};

  return (
      <AuthContext.Provider value={currentUser}>
        <ListContext.Provider value={todoApi}>
          <section className="todoapp">
            <Header title={appName}/>
            <ToggleAll>
              <TodosList/>
            </ToggleAll>
            <Footer/>
          </section>
        </ListContext.Provider>
      </AuthContext.Provider>
  )
}