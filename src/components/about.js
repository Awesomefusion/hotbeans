import React from "react"
import styles from "../styles/about.module.css"
import officeimage from "../img/office.png"
class About extends React.Component {
    render(){
        return (
                <div className={styles.main}>
                    <img className={styles.largeImage} src={officeimage}/>
                    <h1 className={styles.middleTitle}>About Hot Beans</h1>

                    <p>
                    We partner with businesses who aspire to unlock the unique value of their brand and maximise their digital output. Our digital journey began as many of the best things do – in a haze of frantic ideas and brainstorming late at night.
                    </p>

                    <p>
                    It all began back in 2015, with a dream of offering web-based solutions which operated efficiently and effectively. We aim to provide real value and tangible results to clients who wanted both style and substance for their online business.
                    </p>

                    <p>
                    We still focus on our core message and what spurred the creation of Hot Beans. Our in-house team take their time to understand you, but most importantly, the consumer.
                    </p>

                    <p>
                    At the end of the day, clients are the people who matter the most. Their views and opinions shape business right to their core. So, doesn’t it make sense to listen to their needs?
                    </p>

                </div>
        )
    }
}
export default About