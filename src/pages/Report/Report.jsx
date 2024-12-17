import React from 'react';
import { useQuizContext } from '../../context/QuizContext';
import styles from './Report.module.css';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';
import { useNavigate } from 'react-router-dom';

const Report = () => {

  const {
    quizState: { questions, score, correctAnswersCount, incorrectAnswersCount },
    resetQuiz,
  } = useQuizContext();

  const navigate = useNavigate();

  const handleRestart = () => {
    resetQuiz(); 
    navigate('/');
  };

  return (
    <Wrapper>
        <div className={styles.reportBox}>
            <h1>Your result</h1>

            {/* score-bar */}
            <div className={styles.reportScore}>
                <div className={styles.reportScoreBar}>
                    <p>{(score&&score/questions.length)*100}%</p>
                </div>
            </div>

            {/* report-details */}
            <div className={styles.reportStatus}>
                <div className={styles.correct}><strong>{correctAnswersCount}</strong> Correct</div>
                <div className={styles.incorrect}><strong>{incorrectAnswersCount}</strong> Incorrect</div>
            </div>

          <Button onClick={handleRestart} className={styles.resetBtn}>Start Again</Button>
        </div>
    </Wrapper>
  )
}

export default Report;

