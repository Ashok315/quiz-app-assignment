import React from 'react'
import styles from "./Report.module.css"
import Wrapper from '../../components/Wrapper/Wrapper'
import Button from '../../components/Button/Button'

const Report = () => {
  return (
    <Wrapper>
        <div className={styles.reportBox}>
            <h1>Your result</h1>
            <div className={styles.reportScore}>
                <div className={styles.reportScoreBar}>
                    <p>60%</p>
                </div>
            </div>
            <div className={styles.reportStatus}>
                <div className={styles.correct}><strong>3</strong> Correct</div>
                <div className={styles.incorrect}><strong>2</strong> Incorrect</div>
            </div>

          <Button>Start again</Button>
        </div>
    </Wrapper>
  )
}

export default Report
