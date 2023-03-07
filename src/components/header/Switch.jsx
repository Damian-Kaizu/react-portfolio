import React, { useContext } from 'react'
import "./switch.css"
import { DarkModeContext } from '../../context/DarkModeContext';
const Switch = ({ toggleTheme }) => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <label class="switch">
            <input type="checkbox" onClick={handleClick} />
            <span class="slider"></span>
        </label>
    );

}

export default Switch

