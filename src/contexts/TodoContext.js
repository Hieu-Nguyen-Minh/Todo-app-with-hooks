import React, { createContext, useEffect, useReducer } from 'react';
import { todoReducer } from '../reducers/TodoReducer';
import { GET_TODOS, SAVE_TODOS } from '../reducers/Type';

export const todoContext = createContext();

const TodoContextProvider = ({ children }) => {
    //state
    // const [todos, setTodo] = useState([])
    const [todos, dispatch] = useReducer(todoReducer, [])
    //useEffect
    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload: null
        })
    }, [])

    useEffect(() => {
        dispatch({
            type: SAVE_TODOS,
            payload: { todos }
        })
    }, [todos])

    // //function
    // const addTodo = (todo) => {
    //     setTodo([...todos, todo])
    // }

    // const deleteTodo = (id) => {
    //     setTodo(todos.filter(todo => todo.id !== id))
    // }
    //contextData
    const TodoContextData = {
        todos,
        dispatch
    }

    return (
        <todoContext.Provider value={TodoContextData}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoContextProvider;