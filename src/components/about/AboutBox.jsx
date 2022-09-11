import React from 'react';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">3</h3>
                    <span className="about__subtitle">Projects completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-screen-desktop"></i>

                <div>
                    <h3 className="about__title">1743</h3>
                    <span className="about__subtitle">Hours spent on web</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-clock"></i>

                <div>
                    <h3 className="about__title">1</h3>
                    <span className="about__subtitle">Days remain</span>
                </div>
            </div>
        </div>
    );
}

export default AboutBox;
