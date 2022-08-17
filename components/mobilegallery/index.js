import React from "react";
import styles from "./styles.module.css"
import Section from "../section";
import Image from "next/image";




export default function Mobilegallery({ title, projecturl, name, projectimg, projectname, description, languages, icons, number,}) {
    return <Section number={number} name={name}>
        <div className={styles.gallery} style={{backgroundImage:`url(${projectimg})`}} > <div className={styles.background}>
            <div className={styles.gallerybody}>
        <small className='primary-color'>featured project</small>
        <h4 className={styles.title}>{projectname}</h4>
        <div className={styles.descriptionContainer}>
                    <div className={styles.description}>{description} </div>
                    <div className={styles.languages}>{languages?.map(item => {
                        return <span className={styles.language} key={item}>{item}</span>
                    })} </div>
                </div>
                <a href={projecturl}className={styles.button}>Learn More</a>
                </div>
        </div>
        </div>
    </Section>
}