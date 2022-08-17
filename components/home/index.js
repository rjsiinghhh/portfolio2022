import React from "react";
import Hero from "../hero";
import Section from "../section";
import Experience from "../experience";
import Gallery from "../gallery";
import Mobilegallery from "../mobilegallery";
import Responsivecontainer from "../responsivecontainer";
import Contactme from "../contactmesection";
import Footer from "../footer";

export default function Home() {
   return <div>
      <Hero heading="Rj Singh" contents="I'm a software engineer who loves to build and design user experiences. Currently, I'm trying to get my first position as a software engineer." subheading=" & I love to code." imageurl="/profilepic.jpg"  ></Hero>
      <Experience heading="Leading up to now" />
     <Responsivecontainer isMobile={false}>
      <Gallery name="Gallery" projectname="The Zamora Project" description="An online property manager used to track expenses, work notes, and give map details about the real estate." languages={["react", "d3", "express", "postgres", "bootstrap"]} projectimg="/zamora.png" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]} reverse />
      <Gallery projectname="Restaurant Finder" description="An application made to search, review, and add your favorite restaurants in any city you choose." languages={["react", "express", "mongodb", "node"]} projectimg="/Restaurantfinder.jpg" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]} />
      <Gallery projectname="Gowah" description="A real estate listing app that shoes current homes in San Francisco." languages={["react", "php", "postgres"]} projectimg="/gowah.png" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]} reverse />
      <Gallery projectname="Coronavirus Update" description="An app where the user can search by country and get live updates on COVID-19 cases." languages={["javascript", "css", "html"]} projectimg="/coronavirusupdate.jpg" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]}  />
      </Responsivecontainer> 
      <Responsivecontainer isMobile>
      <Mobilegallery projectname="The Zamora Project" description="An online property manager used to track expenses, work notes, and give map details about the real estate." languages={["react", "d3", "express", "postgres", "bootstrap"]} projectimg="/zamora.png" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]} reverse />
      <Mobilegallery projectname="Restaurant Finder" description="An application made to search, review, and add your favorite restaurants in any city you choose." languages={["react", "express", "mongodb", "node"]} projectimg="/Restaurantfinder.jpg" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]} />
      <Mobilegallery projectname="Gowah" description="A real estate listing app that shoes current homes in San Francisco." languages={["react", "php", "postgres"]} projectimg="/gowah.png" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]} reverse />
      <Mobilegallery projectname="Coronavirus Update" description="An app where the user can search by country and get live updates on COVID-19 cases." languages={["javascript", "css", "html"]} projectimg="/coronavirusupdate.jpg" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]}  />
      </Responsivecontainer>
      <Contactme />
      <Footer />
   </div>
}