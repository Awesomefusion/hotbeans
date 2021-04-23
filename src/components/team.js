import React from "react"
import styles from "../styles/team.module.css"
import one from "../img/1.png"
import two from "../img/2.png"
import three from "../img/3.png"
import four from "../img/4.png"
import five from "../img/5.png"
import six from "../img/6.png"

class Team extends React.Component {
    render(){
        return (
                <div className={styles.main}>
                    <h1 className={styles.middleTitle}>Say hello to our team!</h1>
                    <div className={styles.teamContainer}>
                        <img className={styles.teamPic} src={one}/>
                        <img className={styles.teamPic} src={two}/>
                        <img className={styles.teamPic} src={three}/>
                        <img className={styles.teamPic} src={four}/>
                        <img className={styles.teamPic} src={five}/>
                        <img className={styles.teamPic} src={six}/>
                    </div>
                </div>
        )
    }
}
export default Team