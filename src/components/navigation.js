import React from "react"
import styles from "../styles/navigation.module.css"
import { Link, Route, Switch } from "react-router-dom"
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
class Navigation extends React.Component {
    render(){
        return (
            <div className={styles.main}>
                <Navbar className={styles.navBar} bg="dark" variant="dark" expand="lg" sticky="top">
                    <Navbar.Brand href="/">Hot Beans</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    </Nav>
                            </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Navigation