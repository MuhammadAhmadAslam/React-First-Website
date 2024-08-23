import React from "react";
import AboutCard from "./aboutCard";
import "./App.css"

let Data = [
    {
        name: "Muhammad Ahmad",
        hobby: "Front End Developer",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque necessitatibus odio ipsa dolor impedit excepturi. "
    },
    {
        name: "Muhammad Hamza",
        hobby: "Front End Developer",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque necessitatibus odio ipsa dolor impedit excepturi. "
    },
    {
        name: "Muhammad Hasnain",
        hobby: "Front End Developer",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque necessitatibus odio ipsa dolor impedit excepturi. "
    }
]
let About = () => {
    return(
        <>
            <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-5xl font-medium title-font mb-4 text-[#FDDD00]">
        ABOUT US
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-white text-2xl">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them.
      </p>
    </div>
 
    <div className="card-container">
    {Data.map((userData) =>  <AboutCard className='card' name={userData.name} hobby={userData.hobby} details={userData.details} />)}
    
    {/* <AboutCard className='card'/>
    <AboutCard className='card'/> */}
</div>
   </div>
      </section>
        </>
    )
}

export default About