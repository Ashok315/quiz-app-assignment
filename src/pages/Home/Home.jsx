import React from "react";
import styles from "./Home.module.css"
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () =>{ 
    const navigate = useNavigate();

    return (
        <div className={styles.homeContainer}>
            <div><img src="/logoUpraised.svg" alt=""></img></div>
            <div className={styles.quizHeading}><h1>Quiz</h1></div>
            <Button onClick={()=>navigate('/question')} className={styles.startBtn}>Start</Button>    
        </div>
    )
}

export default Home;