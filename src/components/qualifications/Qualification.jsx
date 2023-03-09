import React, { useState } from 'react'
import "./qualification.css"
import Wobble from 'react-reveal/Wobble'

const Qualification = () => {
    const [toggleState, settoggleState] = useState(1);
    const toggleTab = (index) => {
        settoggleState(index);
    }
    return (
        <Wobble duration={2000}>
            <section className="qualification section">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My personal Journey</span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className={toggleState === 1 ? `qualification__button qualification__active button--flex`
                            :
                            `qualification__button button--flex`
                        }
                            onClick={() => toggleTab(1)}
                        >
                            <i className="uil uil-graduation-cap qualification__icon"></i>{""}
                            Education
                        </div>

                        <div className={toggleState === 2 ? `qualification__button qualification__active button--flex`
                            :
                            `qualification__button button--flex`
                        } onClick={() => toggleTab(2)}>
                            <i className="uil uil-briefcase-alt qualification__icon"></i>{""}
                            Experience
                        </div>
                    </div>

                    <div className="qualification__sections">
                        <div className={toggleState === 1 ? `qualification__content qualification__content-active` :
                            `qualification__content`}>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">BEHS 3 Kamayut</h3>
                                    <span className="qualification__subtitle">Matriculated</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>2018
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Computer Science</h3>
                                    <span className="qualification__subtitle">University of Yangon</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>2019 - Present
                                    </div>
                                </div>


                            </div>


                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Web Development <br/>(Laravel) </h3>
                                    <span className="qualification__subtitle">Code Lab</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>2022
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Mechanics of Materials</h3>
                                    <span className="qualification__subtitle">Handong Global University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>Present
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className={toggleState === 2 ? `qualification__content qualification__content-active` :
                            `qualification__content`}>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Class Coordinator</h3>
                                    <span className="qualification__subtitle">Take Your Time</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>2021 - Present
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Content Writer</h3>
                                    <span className="qualification__subtitle">CirclesX and Compass</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>2022 August - 2023 January
                                    </div>
                                </div>


                            </div>


                            {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">></h3>
                                <span className="qualification__subtitle">Spain - Instiute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}


                        </div>
                    </div>
                </div>
            </section >
        </Wobble>
    )
}

export default Qualification