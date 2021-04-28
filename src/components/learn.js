import React from "react"
import styles from "../styles/learn.module.css"
class Learn extends React.Component {
    render(){
        return (
                <div className={styles.main}>
                    <h1 className={styles.middleTitle}>Learn</h1>

                    <p>Below are various links to resources to learn Web Development, enjoy!</p>

                    <ul>
                        <li><a href="https://teamtreehouse.com/">Team Treehouse</a></li>
                        <li><a href="https://www.lynda.com/">Lynda</a></li>
                        <li><a href="https://www.udemy.com/courses/development/">Udemy</a></li>
                        <li><a href="https://www.codecademy.com/">Code Academy</a></li>
                        <li><a href="https://www.theodinproject.com/">The Odin Project</a></li>
                        <li><a href="https://www.codewars.com/">Code Wars</a></li>

                    </ul>
                </div>
        )
    }
}
export default Learn