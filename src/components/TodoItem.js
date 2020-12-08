import React, { useContext } from 'react'
import { themeContext } from '../contexts/ThemeContext'
import { todoContext } from '../contexts/TodoContext';
import { DELETE_TODO } from '../reducers/Type';

const TodoItem = ({ todo }) => {
    //load context
    const { theme } = useContext(themeContext);
    const { dispatch } = useContext(todoContext)

    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;
    return (
        <div>
            <li onClick={() => {
                dispatch({
                    type: DELETE_TODO,
                    payload: {
                        id: todo.id
                    }
                })
            }} style={style}>{todo.title}</li>
        </div>
    )
}

export default TodoItem
