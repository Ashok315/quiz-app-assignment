import React from "react";
import styles from "./Home.module.css"
import Button from "../../components/Button/Button";
import { useQuizContext } from "../../context/QuizContext";
import quizAPI from "../../api/quizApi";
import { useNavigate } from "react-router-dom";

const Home = () =>{ 
    const { startQuiz } = useQuizContext();
    const navigate = useNavigate();

    // handle start button
    const handleStart = async () => {
      try {
        const questions= await quizAPI.fetchQuestionsAPI();
        startQuiz(questions);
        navigate('/question');
      } catch (error) {
        throw new Error(error.message);
      }
    };

    return (
        <div className={styles.homeContainer}>
            <div><img src="/logoUpraised.svg" alt=""></img></div>
            <div className={styles.quizHeading}><p>Quiz</p></div>
            <Button onClick={handleStart} className={styles.startBtn}>Start</Button>    
        </div>
    )
}

export default Home;