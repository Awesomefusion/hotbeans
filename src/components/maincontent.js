import React from "react"
import styles from "../styles/maincontent.module.css"
import { Link, Route, Switch } from "react-router-dom"
import Home from "./home"
import About from "./about"
class Container extends React.Component {
    render(){
        return (
                <div className={styles.main}>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/about"><About/></Route>
                </div>
        )
    }
}
export default Container