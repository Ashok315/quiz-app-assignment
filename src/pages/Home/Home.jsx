import React from "react";
import styles from "./Home.module.css"
import Button from "../../components/Button/Button";

const Home = () =>{ 
    return (
        <div className={styles.homeContainer}>
            <div><img src="/logoUpraised.svg" alt=""></img></div>
            <div className={styles.quizHeading}><p>Quiz</p></div>
            <div><Button>Start</Button>  </div>        
        </div>
    )
}

export default Home;