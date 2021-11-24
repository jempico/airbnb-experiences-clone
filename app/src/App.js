import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import "./style.css";

export default function App({experiences}) {
    const experiencesElements = experiences.map( (experience) => (<Card key={experience.id} {...experience}/> ))
    return (
        <div className="app_container">
            <Navbar/>
            <Hero/>
            <section className="card_container">
                {experiencesElements}
            </section>
            
        </div>
    )
}