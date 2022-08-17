import Image from "next/image";
import React from "react";
import styles from "./styles.module.css"




export default function Hero({subheading, heading, contents, imageurl}) {
    return <div className={styles.hero}>
        <div className={styles.herocontent}>
        <h2 className= {styles.heading}>{heading}</h2>
        <h2 className={styles.subheading}>{subheading}</h2>
        <p className={styles.contents}>{contents}</p>
        <div className={styles.imagecontainer}>
        <Image className={styles.image} src={imageurl} width={100} height={100} objectFit='cover' objectPosition='fill'></Image>
        </div>
        </div>
    </div>
}