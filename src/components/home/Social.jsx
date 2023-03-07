import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext';
const Social = () => {
    const { darkMode } = useContext(DarkModeContext);
    return (
<<<<<<< HEAD
        <div className={darkMode ? `home__social home__social-light` : `home__social`}>
            <a href="https://www.instagram.com/" className={darkMode ? `home__social-icon` : `home__social-icon  home__social-icon-light`} target="_blank">
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://dribble.com/" className={darkMode ? `home__social-icon` : `home__social-icon  home__social-icon-light`} target="_blank">
                <i class="uil uil-dribbble"></i>
            </a>
            <a href="https://github.com/" className={darkMode ? `home__social-icon` : `home__social-icon  home__social-icon-light`} target="_blank">
=======
        <div className={darkMode ? `home__social home__social` : `home__social`}>
            <a href="https://www.instagram.com/" className={darkMode ? `home__social-icon` : `home__social-icon  home__social-icon-dark`} target="_blank">
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://dribble.com/" className={darkMode ? `home__social-icon` : `home__social-icon  home__social-icon-dark`} target="_blank">
                <i class="uil uil-dribbble"></i>
            </a>
            <a href="https://github.com/" className={darkMode ? `home__social-icon` : `home__social-icon  home__social-icon-dark`} target="_blank">
>>>>>>> de06718 (Made Changes)
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social