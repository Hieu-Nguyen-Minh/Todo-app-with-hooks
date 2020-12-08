import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { themeContext } from '../contexts/ThemeContext'
import { todoContext } from '../contexts/TodoContext';
import { ADD_TODO } from '../reducers/Type';

const TodoFrom = () => {
    //load context
    const { theme } = useContext(themeContext);
    const { isLightTheme, light, dark } = theme;
    //load context todo
    const { dispatch } = useContext(todoContext)

    const style = isLightTheme ? light : dark;

    const [title, setTitle] = useState('')

    const ontitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: ADD_TODO,
            payload: {
                todo: {
                    id: uuidv4(),
                    title
                }
            }
        })
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder='Enter new todo' onChange={ontitleChange} value={title} required />
            <input type="submit" value="Add" style={style} />
        </form>
    )
}

export default TodoFrom
