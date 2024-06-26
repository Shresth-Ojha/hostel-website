import React from 'react';
import styles from './About.module.css';
import Bull from './AboutImage.png';

function About() {
    return (
        <div className={styles.about} id="about">
            <img src={Bull} alt="Img" className={styles.about_img} />
            <div className={styles.about_body}>
                <h1 className={styles.heading}>About Us</h1>
                <hr className={styles.horizontal_line} />
                <p className={styles.about_description}>
                    Nilgiri has been standing strong since 1965. Nilgiri folks
                    aspire high, achieve high. Alumni from Nilgiri have been
                    writing golden legacies , be it sports, extra curricular
                    activities or academics. Whenever it comes to street-play
                    Nil-Bulls have always raised the bar. Nilgiri has been
                    continuously dominating in sports especially Cricket and
                    Aquatics.
                </p>
            </div>
        </div>
    );
}

export default About;
