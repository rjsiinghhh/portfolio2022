import React, { useState } from "react";
import styles from "./styles.module.css"



export default function Navbar() {

    const[className, setClassName] = useState('')



   return <div>
    <nav className={`${styles.navbar} ${className}`}>
            <div className ={styles.hamburgerMenu} onClick={
                ()=>{
                    setClassName(!className?styles.change:'')
                }
            }>

                <div className={`${styles.line} ${styles.line1}`}></div>
                <div className={`${styles.line} ${styles.line2}`}></div>
                <div className={`${styles.line} ${styles.line3}`}></div>

            </div>

            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="#about" className={styles.navLink}> About </a>
                </li>

                <li className={styles.navItem}>
                    <a href="#experience" className={styles.navLink}> Experience </a>
                </li>

                <li className={styles.navItem}>
                    <a href="#gallery" className={styles.navLink}> Gallery </a>
                </li>

                <li className={styles.navItem}>
                    <a href="#contact" className={styles.navLink}> Contact </a>
                </li>

                <li className={styles.navItem}>
                    <a href="/ArjunSinghResume.pdf" download className={styles.navLink}> Resume </a>
                </li>
            </ul>
        </nav>
    </div>}