import React from "react"
import styles from "../styles/home.module.css"
class Home extends React.Component {
    render(){
        return (
                <div className={styles.main}>
                    <h1 className={styles.middleTitle}>Get a fresh look...</h1>

                    <div className={styles.contentBox}>
                        <p>
                            Get a new look for your business or organization with a Hot Beans web development package,
                            contact us for a quote today!
                        </p>
                    </div>

                    <div className={styles.contentBox}>
                        <p>
                            We offer a wide range of standardized and bespoke packages:
                            
                                <ul>
                                    <li>Standard static Web Package £300</li>
                                    <li>Bespoke static Web Package £500</li>
                                    <li>Standard eCommerce Package £800</li>
                                    <li>Bespoke eCommerce Package £1200</li>
                                </ul>

                            Contact us for more information and recieve a quote today!

                        </p>
                    </div>

                </div>
        )
    }
}
export default Home