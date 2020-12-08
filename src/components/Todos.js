import React, { useContext } from 'react'
import TodoFrom from './TodoFrom'
import TodoItem from './TodoItem'
import { todoContext } from '../contexts/TodoContext'
import { AuthContext } from '../contexts/AuthContext'


const Todos = () => {
    // const [todos, setTodo] = useState([
    //     { id: 1, title: 'viec1' },
    //     { id: 2, title: 'viec2' },
    //     { id: 3, title: 'viec3' },
    // ])

    // const addTodo = (todo) => {
    //     setTodo([...todos, todo])
    // }

    // const deleteTodo = (id) => {
    //     setTodo(todos.filter(todo => todo.id !== id))
    // }

    //load context
    const { todos } = useContext(todoContext);
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <div className="todo-list">
            <TodoFrom />
            {isAuthenticated ? (
                <ul>
                    {
                        todos.map(todo => {
                            return <TodoItem todo={todo} key={todo.id} />
                        })
                    }
                </ul>
            ) : (
                    <p style={{ textAlign: 'center' }}>not authorised</p>
                )}
        </div>
    )
}

export default Todos
