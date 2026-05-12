import { createContext, useState } from "react";

export const TodoContext = createContext()

export const TodoContextProvider = ({ children }) => {

    const [todos, setTodos] = useState( JSON.parse(localStorage.getItem('todos')) || [])



    localStorage.setItem('todos', JSON.stringify(todos))
    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    )
}
