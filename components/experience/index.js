import React, { useState } from "react";
import styles from "./styles.module.css"
import Experiencedetail from "../experiencedetail";
import Responsivecontainer from "../responsivecontainer";

const experiences = [
    {
        jobtitle: "Software Engineer",
        time: "November 2020 - present",
        descriptions: ["Marilyn Fricke - In this role I worked with an SEO agency to create, edit and maintain their customer websites. In this role, I worked closely with the team to implement code, troubleshoot technical issues, assist with integrations to enhance SEO competitiveness and ensure that the website is optimized for search. Since 2020, I've worked at the agency as a part time engineer and have primarily used HTML, CSS, Javascript, React and Wordpress during this time. "],
        company: "Marilyn Fricke"
    },
    {
        jobtitle: "Software Engineering Fellow",
        time: "August 2020 - November 2020",
        descriptions: ["Attended General Assembly's award-winning 500-hour Sofware Engineering Immersive program covering full-stack application development integrating object-oriented programming in solo and team building collaborative environments. Focus on Javascript, HTML, CSS, Sass/Scss, PHP, jQuery, React, Node.js, Express, EJS, MongoDB, Mongoose, Postgres, SQL, Bootstrap, Materialize, AJAX, JSON, Figma, WordPress, & Github. Covered in 13 weeks, this experience gave me the foundation to understand code and to be able to take on more complex tasks on my own."],
        company: "General Assembly"
    },
    {
    jobtitle: "Ranch Manager",
    time: "August 2012 - October 2016 / May 2018 - August 2022",
    descriptions: ["From 2012 to 2020, I worked with my father in developing and managing our 500 acre orchard estate. The estate included pistachios, walnuts, rice and tomatoes. I worked as the Ranch Manager, overseeing the management of trees, involved in planting and harvesting crops, supervised our team, operated orchard technology and equipment, treated tree & plants for diseases, pests and weeds and set up daily supplies needed for the crew to be successful daily."],
    company: "Pistachio & Walnut Ranch"
    }
    ,
    {
    jobtitle: "Barista",
    time: "April 2023 - Present",
    descriptions: ["Since April 2023, I've worked at St. Frank's Coffee located in Russian Hill, San Francisco. "],
    company: "St Frank's"
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