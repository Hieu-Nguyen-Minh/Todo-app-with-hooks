import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { themeContext } from '../contexts/ThemeContext';
import { TOGGLE_AUTH } from '../reducers/Type';

const NavBar = () => {
    const { theme } = useContext(themeContext)
    const { isLightTheme, light, dark } = theme
    const style = isLightTheme ? light : dark
    //load auth context
    const { isAuthenticated, dispatch } = useContext(AuthContext)
    return (
        <div className="navbar" style={style}>
            <h1>My Hooks App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    {isAuthenticated ? 'you are logged in ' : ''}
                    <button onClick={() => {
                        dispatch({
                            type: TOGGLE_AUTH
                        })
                    }}>{isAuthenticated ? 'Login' : 'Logout'}</button>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;