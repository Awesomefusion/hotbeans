import React from "react"
import styles from "../styles/footer.module.css"
class Footer extends React.Component {
    render(){
        return (
            <div className={styles.main}>
                <p className={styles.footertext}>
                    Copyright © 2021 Hot Beans Ltd. All rights reserved.
                </p>
            </div>
        )
    }
}
export default Footer