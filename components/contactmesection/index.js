import React from "react";
import styles from "./styles.module.css"




export default function Contactme({ linkid }) {
    return <div id={linkid} className={styles.container}>
        <small className="primary-color">Find Me?</small>
        <h1 className={styles.heading}>Get In Touch</h1>
        <p className={styles.content}>I&apos;m currently looking for new opportunites, I&apos;m eager to apply my knowledge and expand my portfolio on any project! My inbox is always open, hit me up!</p>
        <a className={styles.button} href="mailto:rjsiinghhh@gmail.com">Contact</a>
    </div>
}