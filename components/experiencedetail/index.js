import React from "react";
import styles from "./styles.module.css"




export default function Experiencedetail({company, jobtitle, time, descriptions}) {
    return <div className={styles.header}>
        <div className={styles.card}>
            <h3 className={styles.company}>{jobtitle} | {company}</h3>
            <small className={styles.time + " roboto thin"}>{time}</small>
            {descriptions.map(
                description => <p key={description} className="roboto thin">{description} </p>
            )}
             </div>
    </div>
}