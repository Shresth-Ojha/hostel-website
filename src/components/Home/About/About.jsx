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
                    aspire high, achieve high.Alumni from Nilgiri have been
                    writing golden legacies ,be it sports or extra curricular
                    activities or academics.Whenever it comes to street-play
                    Nil-Bulls have always raised the bar.The best street-play
                    performers have come from this household and joined the
                    institute's squad.Nilgiri has been continuously dominating
                    in sports especially Cricket and Aquatics. <br></br>Nilgiri Hostel
                    embraces the motto "Teamwork Makes the Dream Work,"
                    fostering a culture of collaboration and excellence across
                    academics, sports, and extracurricular activities. Together,
                    we aspire to maintain our rich legacy while supporting each
                    other and our community.
                </p>
            </div>
        </div>
    );
}

export default About;
