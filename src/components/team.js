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

                        <div className={styles.memberBox}>
                            <img className={styles.teamPic} src={one}/>
                            <p>John Davies - Senior Manager</p>
                        </div>

                        <div className={styles.memberBox}>
                            <img className={styles.teamPic} src={two}/>
                            <p>Tom Owens - Database Manager</p>
                        </div>

                        <div className={styles.memberBox}>
                            <img className={styles.teamPic} src={three}/>
                            <p>Mike Grafford - Lead Designer</p>
                        </div>
                    </div>

                    <div className={styles.teamContainer}>
                    <div className={styles.memberBox}>
                            <img className={styles.teamPic} src={four}/>
                            <p>Shane Tolstoy - System Admin</p>
                        </div>

                        <div className={styles.memberBox}>
                            <img className={styles.teamPic} src={five}/>
                            <p>Lindsay Carrol - Trainee Web Developer</p>
                        </div>

                        <div className={styles.memberBox}>
                            <img className={styles.teamPic} src={six}/>
                            <p>Stephen Baker - Trainee Web Developer</p>
                        </div>
                    </div>



                </div>
        )
    }
}
export default Team