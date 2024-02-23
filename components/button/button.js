import React from 'react';
import styles from './button.module.css'
import { myFont, myFontBold } from '../font/myfont';
function HomeButton(props) {
    return (
        <>
            <div className={styles.homeButton}>
                <div className={styles.top}></div>
                <div className={styles.home}>

                    <h3><span className= {`${myFontBold.className} ${styles.pointer}`}>{props.title}</span></h3>

                    <div className={styles.box}></div>
                    {props.cs && <h6 className={`${styles.cs} ${myFont.className}`}>Coming Soon!</h6>}

                </div>

            </div>
        </>
    );
}

export default HomeButton;