import React from "react";
import styles from "./Home.module.css"
import Button from "../../components/Button";
// import { useQuiz } from "../../context/QuizContext";
// import quizAPI from "../../api/quizApi";
import { useQuizContext } from "../../context/QuizContext";
import quizAPI from "../../api/quizApi";
import { useNavigate } from "react-router-dom";

const Home = () =>{ 
    const { startQuiz } = useQuizContext();
    const navigate = useNavigate();

    const handleStart = async () => {
      try {
        const questions= await quizAPI.fetchQuestionsAPI();
        startQuiz(questions);
        navigate('/question');
      } catch (error) {
        console.error('Error starting quiz:', error);
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