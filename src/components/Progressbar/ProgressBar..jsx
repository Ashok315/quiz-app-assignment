import React from 'react'
import styles from "./ProgressBar.module.css"

const ProgressBar = ({cuurentStage, totalStage, percentage}) => {
    console.log(percentage)
  return (
    <div className={styles.progressBar}>
      
    <div className={styles.progressInner} 
             style={{
                background: `conic-gradient(#44B77B ${percentage}%, #F3F4FA 0%)`,
                    }}

    >
    
        <div className={styles.progressText}>
             {cuurentStage}/<span>{totalStage}</span>
        </div>
    </div>
   
</div>
  )
}

export default ProgressBar;