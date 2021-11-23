import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./style.css";

export default function App() {
    return (
        <div className="app_container">
            <Navbar/>
            <Hero/>
            <section className="card_container">
            <Card/>
            <Card/>
            <Card/>
        </section>
            
        </div>
    )
}