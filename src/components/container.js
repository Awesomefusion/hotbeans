import React from "react"
import styles from "../styles/container.module.css"
import Header from "./header"
import Footer from "./footer"
import MainContent from "./maincontent"
import Navbar from "./navigation"
import { Link, Route, Switch } from "react-router-dom"
class Container extends React.Component {

    render(){
        return (
                <div className={styles.main}>
                        <Navbar/>                    
                            <MainContent/>
                    <Footer/>
                </div>
        )
    }
}
export default Container