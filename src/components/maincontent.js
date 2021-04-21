import React from "react"
import styles from "../styles/maincontent.module.css"
import { Link, Route, Switch } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Team from "./team"
import Jobs from "./jobs"
import Learn from "./learn"
class Container extends React.Component {
    render(){
        return (
                <div className={styles.main}>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/about"><About/></Route>
                    <Route path="/team"><Team/></Route>
                    <Route path="/jobs"><Jobs/></Route>
                    <Route path="/learn"><Learn/></Route>
                </div>
        )
    }
}
export default Container