import React from "react";
import Hero from "../hero";
import Section from "../section";
import Experience from "../experience";
import Gallery from "../gallery";
import Mobilegallery from "../mobilegallery";
import Responsivecontainer from "../responsivecontainer";
import Contactme from "../contactmesection";
import Footer from "../footer";
import Skills from "../skills";

export default function Home() {
   return <div>
      <Hero linkid="about" heading="Rj Singh" contents="During covid, I was introduced to Software Engineering and ever since I've had a passion to build and design user experiences. " subheading=" & I love to build." ></Hero>
      
      <Experience linkid="experience" heading="Leading up to now" />
      <Skills />
     <div id="gallery"></div>
     <Responsivecontainer isMobile={false}>
      <Gallery projectname="Orgami" description="Coming Soon. The first IOS app I've made, the focus to help people struggling with addictions find help near them." languages={["react native, firebase, crypto-js "]} projectimg={"/origami-white.jpg"} icons={[{icon:"fa-brands fa-github-alt", link:"https://github.com/rjsiinghhh/iphoneapp" }]} />

      <Gallery name="Gallery" projectname="The Zamora Project" description="An online property manager used to track expenses, work notes, and give map details about the real estate." languages={["react", "d3", "express", "postgres", "bootstrap"]}
      //  projectimg="/zamora.png" 
      icons={[{ icon: "fa-brands fa-github-alt", link:"https://github.com/rjsiinghhh/zamora" }, { icon: "fa-solid fa-share", link:"https://zamoraproject.netlify.app/" }]} reverse />

      <Gallery projectname="Restaurant Finder" description="An application made to search, review, and add your favorite restaurants in any city you choose." languages={["react", "express", "mongodb", "node"]} projectimg="/Restaurantfinder.jpg" icons={[{ icon: "fa-brands fa-github-alt", link:"https://github.com/rjsiinghhh/projecthreee" }, { icon: "fa-solid fa-share", link:"https://rjsfoodreviewapp.herokuapp.com/" }]} />

      <Gallery projectname="Gowah" description="A real estate listing app that shoes current homes in San Francisco." languages={["react", "php", "postgres"]} projectimg="/gowah.png" icons={[{ icon: "fa-brands fa-github-alt", link: "https://github.com/rjsiinghhh/rj-gowah"}, { icon: "fa-solid fa-share", link:"http://gowahhhomes.herokuapp.com/" }]} reverse />

      <Gallery projectname="Coronavirus Update" description="An app where the user can search by country and get live updates on COVID-19 cases." languages={["javascript", "css", "html"]} projectimg="/coronavirusupdate.jpg" icons={[{ icon: "fa-brands fa-github-alt", link:"https://github.com/rjsiinghhh/coronavirus.io" }]}  />

      </Responsivecontainer> 
      <Responsivecontainer isMobile>
      <Mobilegallery projectname="The Zamora Project" description="An online property manager used to track expenses, work notes, and give map details about the real estate." languages={["react", "d3", "express", "postgres", "bootstrap"]} projecturl="https://zamoraproject.netlify.app/" projectimg="/zamora.jpg" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]} link="https://zamoraproject.netlify.app/" reverse />
      <Mobilegallery projectname="Restaurant Finder" description="An application made to search, review, and add your favorite restaurants in any city you choose." languages={["react", "express", "mongodb", "node"]} projecturl="https://rjsfoodreviewapp.herokuapp.com/" projectimg="/Restaurantfinder.jpg" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]} />
      <Mobilegallery projectname="Gowah" description="A real estate listing app that shoes current homes in San Francisco." languages={["react", "php", "postgres"]} projecturl="http://gowahhhomes.herokuapp.com/" projectimg="/gowah.png" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]} reverse />
      <Mobilegallery projectname="Coronavirus Update" description="An app where the user can search by country and get live updates on COVID-19 cases." languages={["javascript", "css", "html"]} projecturl="https://github.com/rjsiinghhh/coronavirus.io" projectimg="/coronavirusupdate.jpg" icons={[{ icon: "fa-brands fa-github-alt" }, { icon: "fa-solid fa-share" }]}  />
      </Responsivecontainer>
      <Contactme linkid="contact" />
      <Footer imageurl="/profilepic.jpg"  />
   </div>
}