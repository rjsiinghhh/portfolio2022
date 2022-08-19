import React, { useState } from "react";
import styles from "./styles.module.css"
import Experiencedetail from "../experiencedetail";

const experiences = [
    {
        jobtitle: "Software Engineer",
        time: "November 2020 - present",
        descriptions: ["In this role I've worked with SEO agency to create and maintain customer websites using Javascript, HTML, CSS, & Wordpress."],
        company: "Marilyn Fricke"
    },
    {
        jobtitle: "Software Engineering Fellow",
        time: "August 2020 - November 2020",
        descriptions: ["Attended General Assembly's award-winning 500-hour Sofware Engineering Immersive program covering full-stack application development integrating object-oriented programming in solo and team building collaborative environments."],
        company: "General Assembly"
    },
    {
    jobtitle: "Ranch Manager",
    time: "August 2012 - October 2016 / May 2018 - August 2020",
    descriptions: ["At the family ranch, I Coordinated system installations, testing and code corrections and participated daily to team meetings and provided inputy on deadlines, designs, and enhancements. I also spent time monitioring equipment functionality to verify optimal performance and adjusting system controls on each ranch."],
    company: "Family Pistachio & Walnut Ranch"
    },
    {
    jobtitle: "Head Barista",
    time: "November 2021- Present",
    descriptions: ["Work fulltime in a coffee providing my people with the best coffee out there."],
    company: "Bluestone Lane"
    }
]



export default function Experience({heading, linkid}) {
    const [section, setSection] = useState(0);

    return <div id={linkid} className='section'>
       
        <div className={styles.experiencecontainer}>  
        <div className={styles.menu}>
        {experiences.map(
            (experience,index)=> <div onClick={()=>{
                setSection(index)
            }} className={index===section ? styles.menuitem + " " + styles.menuitemactive : styles.menuitem} key={experience.company}>{experience.company}</div>
            )}
        </div>
        <div className={styles.experience}>  
        <h2 className={styles.heading}>{heading}</h2>
        {experiences.map(  
            (experience, index)=> index === section &&<Experiencedetail {...experience} />
        )}  
        </div>
    </div>
    </div>
}