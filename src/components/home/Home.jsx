import React, { useCallback, useContext, useState } from 'react'
import Data from './Data'
import "./home.css"
import Social from './Social'
import ScrollDown from './ScrollDown'
import clickme from './console/clickme'
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";
import particlesOptions1 from "../../particles1.json"
import Particles from "react-particles";
import { DarkModeContext } from '../../context/DarkModeContext'
import HomeTitle from './HomeTitle'
const Home = () => {

    const particlesInit = useCallback((main) => {
        loadFull(main);
    }, []);

    const { darkMode } = useContext(DarkModeContext);
    return (
        <section className={darkMode ? `home section ` : ` home section dark `} id="home">
            <Particles options={particlesOptions} init={particlesInit} className={darkMode ? `hide` : `show`} />
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div className={darkMode ? `home__img ` : `home__img`}></div>

                    <Data />

                </div>
                <ScrollDown />

            </div>
        </section >
    )
}

export default Home