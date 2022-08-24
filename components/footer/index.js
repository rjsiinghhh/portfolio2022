import React from "react";
import styles from "./styles.module.css";


export default function Footer({}) {
 return <div className={styles.footer}>
        <a className={styles.designed} href="https://github.com/rjsiinghhh/portfolio2022">Designed & Developed By RJ Singh</a>
        <div className={styles.icons}>
       <a href="https://github.com/rjsiinghhh"><i className="fa-brands fa-github-alt"></i></a> 
        <a href="https://www.instagram.com/rjsiinghhh/"><i className="fa-brands fa-instagram"></i></a>
       <a href="https://www.linkedin.com/in/arjunsinghh/"><i className="fa-brands fa-linkedin-in"></i></a> 
    </div>
 </div>}
