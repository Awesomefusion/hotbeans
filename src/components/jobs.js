import React from "react"
import styles from "../styles/jobs.module.css"
class Jobs extends React.Component {
    render(){
        return (
                <div className={styles.main}>
                    <h1 className={styles.middleTitle}>Join Us! We are looking for developers.</h1>

                    <h1>Role Specification</h1>

                    <p>Designs and builds websites for corporate or individual clients. Works with colleagues and clients to understand website requirements and client needs. Writes, tests, and debugs code and applications. Maintains knowledge of programming languages and monitors website analytics.
                    </p>

                    <hr/>

                    <h1>Duties</h1>
                    
                    <ul>
                        <li>Meets with clients and colleagues to determine website needs and follows up with regular conversations and updates</li>
                        <li>Creates website layouts with computer or handmade sketches to organise information and allow for intuitive usage</li>
                        <li>Builds websites to client specifications by writing code, designing pages and widgets, and incorporating graphics and video elements</li>
                        <li>Determines the best plug-ins and applications to provide websites with new features and functionality, and installs them accordingly</li>
                        <li>Tests websites using a variety of browsers, including Internet Explorer, Google Chrome, Safari, and Mozilla Firefox; and debugs as necessary</li>
                        <li>Maintains fluency in one or more programming languages, such as HTML</li>
                    </ul>

                    <hr/>

                    <h1>Skills and Requirements</h1>

                    <p>Bachelor's Degree and Relevant Coursework in Website Design and Information Technology, Knowledge of Digital Media Production and Graphic Design, Creativity, Teamwork, Analytical Thinking, Critical Thinking, Interpersonal Communication, Customer Service Skills, Attention to Detail</p>

                    <hr/>
                    <h2>Contact us for more information.</h2>
                    <hr/>
                </div>
        )
    }
}
export default Jobs