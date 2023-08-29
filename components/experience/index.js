import React, { useState } from "react";
import styles from "./styles.module.css"
import Experiencedetail from "../experiencedetail";
import Responsivecontainer from "../responsivecontainer";

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
        descriptions: ["Attended General Assembly's award-winning 500-hour Sofware Engineering Immersive program covering full-stack application development integrating object-oriented programming in solo and team building collaborative environments. Focus on Javascript, HTML, CSS, Sass/Scss, PHP, jQuery, React, Node.js, Express, EJS, MongoDB, Mongoose, Postgres, SQL, Bootstrap, Materialize, AJAX, JSON, Figma, WordPress, & Github. Covered in 13 weeks, this experience truly taught me how to continue learning new skills on my own."],
        company: "General Assembly"
    },
    {
    jobtitle: "Ranch Manager",
    time: "August 2012 - October 2016 / May 2018 - August 2020",
    descriptions: ["From 2012 to 2020 I worked with my father in developing and managing our 500 acre orchard estate. This includes pistachios, walnut, and rice. During this time I was ************ give details and explain what I did as. ************* This experience taught me ******************* "],
    company: "Pistachio & Walnut Ranch"
    },
    {
    jobtitle: "Time in Coffee & Retail",
    time: "November 2021- Present",
    descriptions: ["In 2016 I took some time from working at the Ranch and moved to SF. I spent a year at Zara, and during this time I worked as a Sale Associate. This experience "],
    company: "Bluestone Lane, St. Frank Coffee, Zara"
    }
]



export default function Experience({heading, linkid}) {
    const [section, setSection] = useState(0);

    return <div id={linkid} className='section'>
       
        <div className={styles.experiencecontainer}> 
        <Responsivecontainer isMobile={true} ><h2 className={styles.heading}>{heading}</h2></Responsivecontainer>
        <div className={styles.menu}>
        {experiences.map(
            (experience,index)=> <div onClick={()=>{
                setSection(index)
            }} className={index===section ? styles.menuitem + " " + styles.menuitemactive : styles.menuitem} key={experience.company}>{experience.company}</div>
            )}
        </div>
        <div className={styles.experience}>  
        <Responsivecontainer isMobile={false} ><h2 className={styles.heading}>{heading}</h2></Responsivecontainer>
        {experiences.map(  
            (experience, index)=> index === section &&<Experiencedetail {...experience} />
        )}  
        </div>
    </div>
    </div>
}