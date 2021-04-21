import React from "react"
import styles from "../styles/navigation.module.css"
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import logo from "../img/hotbeans.png"
class Navigation extends React.Component {
    render(){
        return (
            <div className={styles.main}>
                <Navbar className={styles.navBar} bg="dark" variant="dark" expand="lg" sticky="top">
                    <Navbar.Brand>Hot Beans <img alt="logo" className={styles.logo} src={logo}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    <Nav.Link href="/team">Team</Nav.Link>
                                    <Nav.Link href="/jobs">Jobs</Nav.Link>
                                    <Nav.Link href="/learn">Learn</Nav.Link>
                                    </Nav>
                            </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Navigation