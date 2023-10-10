import Image from "next/image";
import React from "react";
import styles from "./styles.module.css"




export default function Hero({subheading, heading, contents, imageurl, linkid}) {
    return <div id={linkid} className={styles.hero}>
        <div className={styles.herocontent}>
        <h2 className= {styles.heading}>{heading}</h2>
        <h2 className={styles.subheading}>{subheading}</h2>
        <p className={styles.contents}>{contents}</p>
       
        </div>
    </div>
}