import React, { useContext, useState } from 'react'
import { lightTheme, darkTheme } from '../theme';
import { useDarkMode } from '../useDarkMode';
import { FaHeart } from 'react-icons/fa'
import './header.css'
import Toggler from './Toggler';
import { DarkModeContext } from '../../context/DarkModeContext';
const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const { darkMode } = useContext(DarkModeContext);
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="index.html" className='nav__logo'>HTOO </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list ">

                        <li className="nav__item">
                            {/* <a href="#home" className={darkMode ? `nav__link active-link` : `nav__link  text-white`}> */}
                            <a href="#home" className={`nav__link active-link`}>
                                <i className="uil uil-estate nav__icon "></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            {/* <a href="#about" className={darkMode ? `nav__link active-link` : `nav__link  text-white`}> */}
                            <a href="#about" className={`nav__link`}>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav__item">
                            {/* <a href="#skills" className={darkMode ? `nav__link active-link` : `nav__link  text-white`}> */}
                            <a href="#skills" className={`nav__link `}>

                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            {/* <a href="#services" className={darkMode ? `nav__link active-link` : `nav__link  text-white`}> */}
                            <a href="#services" className={`nav__link `}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>

                        <li className="nav__item">
                            {/* <a href="#portfolio" className={darkMode ? `nav__link active-link` : `nav__link  text-white`}> */}
                            <a href="#portfolio" className={`nav__link `}>
                                <i className="uil uil-scenery nav__icon"></i>Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            {/* <a href="#contact" className={darkMode ? `nav__link active-link` : `nav__link  text-white`}> */}
                            <a href="#contact" className={`nav__link `}>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div>


                    {/* <Toggler /> */}

                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header >
    )
}

export default Header