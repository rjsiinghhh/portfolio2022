import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return <div className={"container"}> <nav className="navbar">
    <div className="hamburger-menu">

        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>

    </div>

    <ul className="nav-list">
        <li className="nav-item">
            <a href="#" className="nav-link"> About </a>
        </li>

        <li className="nav-item">
            <a href="#" className="nav-link"> Experience </a>
        </li>

        <li className="nav-item">
            <a href="#" className="nav-link"> Gallery </a>
        </li>

        <li className="nav-item">
            <a href="#" className="nav-link"> Contact </a>
        </li>

        <li className="nav-item">
            <a href="#" className="nav-link"> Resume </a>
        </li>
    </ul>
</nav>

<section className="aboutMe">
                <div className="about">
                    <p className="about-position"> RJ Singh.<br /> Software Engineer.</p>
                    <div className="about-sidebar">
                        <img className="profile-pic" src="/profilepic.jpg" alt="" />
                    </div>

                    <div className="about-main">

                        <p className="about-body">
                            I'm a software engineer who loves to build and design user experiences.  <br /> Currently, I'm trying to get my first position as a software engineer. 
                        </p>

                    </div>
                </div>

            </section>

            <section className="my-work" id="work">
                <h2 className="work-title"> Projects </h2>
                <p className="work-subtitle"> </p>


                <div className="portfolio">

                    <a href="#" className="portfolio-item">
                        <img src="/Users/arjunsingh/Desktop/@⌿/portfolio/img/one.jpg" alt="" className="portfolio-img" />
                    </a>

                    <a href="#" className="portfolio-item">
                        <img src="/Users/arjunsingh/Desktop/@⌿/portfolio/img/two.jpg" alt="" className="portfolio-img" />
                    </a>

                    <a href="#" className="portfolio-item">
                        <img src="/Users/arjunsingh/Desktop/@⌿/portfolio/img/three.jpg" alt="" className="portfolio-img" />
                    </a>

                    <a href="#" className="portfolio-item">
                        <img src="/Users/arjunsingh/Desktop/@⌿/portfolio/img/four.jpg" alt="" className="portfolio-img" />
                    </a>

                    <a href="#" className="portfolio-item">
                        <img src="/Users/arjunsingh/Desktop/@⌿/portfolio/img/five.jpg" alt="" className="portfolio-img" />
                    </a>

                    <a href="#" className="portfolio-item">
                        <img src="/Users/arjunsingh/Desktop/@⌿/portfolio/img/six.jpg" alt="" className="portfolio-img" />
                    </a>

                    <a href="#" className="portfolio-item">
                        <img src="/Users/arjunsingh/Desktop/@⌿/portfolio/img/two.jpg" alt="" className="portfolio-img" />
                    </a>

                    <a href="#" className="portfolio-item">
                        <img src="/Users/arjunsingh/Desktop/@⌿/portfolio/img/one.jpg" alt="" className="portfolio-img" />
                    </a>


                </div>



            </section>

            <footer className="footer">
                <div className="footer">
                    <a href="mailto:rjsiinghhh@gmail.com" className="footer-link"> rjsiinghhh@gmail.com</a>
                    <ul className="contact-social-list">
                        <li className="contact-social-item">
                            <a className="contact-link" href="http://https://www.linkedin.com/in/arjunsinghh/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li className="contact-social-item">
                            <a className="contact-link" href="https://github.com/rjsiinghhh">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

 </div>;
}