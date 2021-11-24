import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {Experiences} from "./dummyData.js";

ReactDOM.render(<App experiences={Experiences} />, document.getElementById("root"))