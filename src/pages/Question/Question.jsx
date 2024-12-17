import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Question.module.css';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';
import { useQuizContext } from '../../context/QuizContext';
import ProgressBar from '../../components/Progressbar/Progressbar.';


const Question = () => {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState(null); 

  const {
    quizState: { questions, currentQuestionIndex, selectedAnswers },
    submitAnswer,
    nextQuestion,
    finishQuiz,
  } = useQuizContext();

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
   // Start the timer for current question
    setStartTime(Date.now()); 
  }, [currentQuestionIndex]);


  // handle change option
  const handleOptionChange = (optionId) => {
    if (currentQuestion.isMultipleChoice) {
      const updatedAnswers = selectedAnswers.includes(optionId)
        ? selectedAnswers.filter((id) => id !== optionId)
        : [...selectedAnswers, optionId];
      submitAnswer(updatedAnswers);
    } else {
      submitAnswer([optionId]);
    }
  };


 // handle click next button   
  const handleSubmit = () => {
    if (selectedAnswers.length === 0) {
        alert('Please select at least one option before proceeding to the next question.');
        return; 
      }

    const isCorrect =
      JSON.stringify(currentQuestion.correctAnswer.sort()) ===
      JSON.stringify(selectedAnswers.sort());
    const newScore = isCorrect ? 1 : 0;
    finishQuiz(newScore, isCorrect);

    const timeSpent = Date.now() - startTime; //calculate time spent

    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion(timeSpent); // Pass timeSpent to next question
    } else {
      navigate('/report');
    }
  };



  const progressPercentage = (currentQuestionIndex / questions.length) * 100;

  let progressRingClass = styles.progressBarRing;
  if (progressPercentage < 33) {
    progressRingClass += ` ${styles.low}`;
  } else if (progressPercentage < 66) {
    progressRingClass += ` ${styles.medium}`;
  } else {
    progressRingClass += ` ${styles.high}`;
  }

  return (
    <Wrapper>
      <div className={styles.questionBox}>
        {/* question */}
        <h3>{currentQuestion?.text}</h3>

        {/*question image  */}
        {currentQuestion?.image && (
          <div>
            <img src={currentQuestion.image} alt="question" />
          </div>
        )}

        {/*optionos  */}
        <div className={styles.options}>
          {currentQuestion?.options.map((option) => (
            <div key={option.id} className={`${selectedAnswers.includes(option.id) ? styles.selected : ''}`}>
              <input
                type={currentQuestion.isMultipleChoice ? 'checkbox' : 'radio'}
                id={option.id}
                name="options"
                value={option.id}
                checked={selectedAnswers.includes(option.id)}
                onChange={() => handleOptionChange(option.id)}
                className={styles.optionInput}
              />
              <label htmlFor={option.id} className={styles.optionLabel}>{option.text}</label>
            </div>
          ))}
        </div>

        {/* progress-bar */}
        <ProgressBar cuurentStage={currentQuestionIndex+1}
                    totalStage={questions.length }
                    percentage={currentQuestionIndex?((currentQuestionIndex + 1)/questions.length)*100:10}
        />


        <Button onClick={handleSubmit} className={styles.nextBtn}>
          Next <span>&#8594;</span>
        </Button>
      </div>
    </Wrapper>
  );
};

export default Question;

