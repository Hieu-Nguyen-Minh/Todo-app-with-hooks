import React, { useContext } from 'react'
import { themeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const { toggle } = useContext(themeContext);

    return (
        <div className='toggle-btn' onClick={toggle}>
            <button>Dark Theme</button>
        </div>
    )
}

export default ThemeToggle
