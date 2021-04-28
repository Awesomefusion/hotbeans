import React from "react"
import styles from "../styles/contact.module.css"
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
class Contact extends React.Component {
    render(){
        return (
                <div className={styles.main}>
                    <h1 className={styles.middleTitle}>Enquiries</h1>

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
        )
    }
}
export default Contact