import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import {Experiences} from "./dummyData.js";

import "./style.css";

export default function App() {
    return (
        <div className="app_container">
            <Navbar/>
            <Hero/>
            <section className="card_container">
                {Experiences.map(e => <Card key={e.id} experience={e}/> )}
            
            <Card/>
            <Card/>
        </section>
            
        </div>
    )
}