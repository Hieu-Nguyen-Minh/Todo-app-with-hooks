import React, { createContext, useState } from 'react';

export const themeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    //state
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: {
            background: 'rgb(240,240,240)',
            color: 'black'
        },
        dark: {
            background: 'rgb(39,39,39)',
            color: 'white'
        }
    })
    //function to toggle theme
    const toggle = () => {
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme
        })
    }

    //context data
    const themeContextData = {
        theme,
        toggle
    }

    //return provider
    return (
        <themeContext.Provider value={themeContextData}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider;