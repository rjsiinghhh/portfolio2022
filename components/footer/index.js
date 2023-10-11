import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";


export default function Footer({}) {
 return <div className={styles.footer}>
         <div className={styles.Imagecontainer}>
         <Image className={styles.image} src={imageurl} width={150} height={150} objectFit='cover' objectPosition='fill'></Image>
         </div>
        <a className={styles.designed} href="https://github.com/rjsiinghhh/portfolio2022">Designed & Developed By RJ Singh</a>
        <div className={styles.icons}>
       <a href="https://github.com/rjsiinghhh/portfolio2022"><i className="fa-brands fa-github-alt"></i></a> 
        <a href="https://www.instagram.com/rjsiinghhh/"><i className="fa-brands fa-instagram"></i></a>
       <a href="https://www.linkedin.com/in/arjunsinghh/"><i className="fa-brands fa-linkedin-in"></i></a> 
    </div>
 </div>
 
}
