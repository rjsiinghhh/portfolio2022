import React from "react";
import styles from "./styles.module.css"
import Section from "../section";
import Image from "next/image";




export default function Gallery({ title, name, projectimg, projectname, description, languages, icons, number, reverse, linkid }) {
    return <Section number={number} name={name}>
        <div id={linkid} className={`${styles.gallery} ${reverse? styles.reverse:''}`}>
            {/* {title}
        <div className={styles.card}>
        <h2 className={styles.projectname}>{projectname}</h2>
        <h3 className={styles.description}>{description}</h3>
        <h5 className={styles.languages}> {languages}</h5>
        </div> */}

            <div className={`${styles.column} ${styles.image}`}>
            <Image width={400} height={250} src={projectimg} objectFit="cover" objectPosition="center" quality={100} />
            </div>
            <div className={`${styles.right} ${styles.column} ${styles.flexDirection}`}>
                <small className='primary-color'>featured project</small>
                <h4>{projectname}</h4>
                <div className={styles.descriptionContainer}>
                    <div className={styles.description}>{description} </div>
                    <div className={styles.languages}>{languages?.map(item => {
                        return <span className={styles.language} key={item}>{item}</span>
                    })} </div>
                </div>
                <div className={styles.icons}><span className={styles.icon}>{icons?.map(({icon, link}) => {
                    return <a href={link} className={styles.icon} key={icon}> <i className={icon}></i></a>
                })}</span>
                </div>
            </div>

        
        </div>
        {/* <div className={styles.column}>
                image goes here


            </div>
        <div className={`${styles.right} ${styles.column} ${styles.flexDirection}`}>
                <h4>Coronavirus Tracker</h4>
                <div className={styles.descriptionContainer}>
                    <div className={styles.description}>A simple tool which gives Coronavirus information based on the country of the user's choice. </div>
                    <div className={styles.languages}>{["VS Code", "Javascript", "css", "html"].map(item => {
                        return <span className={styles.language} key={item}>{item}</span>
                    })} </div>
                </div>
                <div className={styles.icons}><span className={styles.icon}>icons</span></div>
            </div> */}



    </Section>
}