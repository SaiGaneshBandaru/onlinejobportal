import React, { useState } from 'react';
import styles from './MockTest.module.css';

const MockTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: 'What is the primary purpose of React?',
      options: [
        'To build backend applications',
        'To build user interfaces',
        'To manage databases',
        'To handle system operations',
      ],
      answer: 1,
    },
    {
      question: 'Which of the following is not a JavaScript data type?',
      options: ['String', 'Number', 'Object', 'Class'],
      answer: 3,
    },
    {
      question: 'What does the acronym SQL stand for?',
      options: [
        'Simple Query Language',
        'Structured Query Language',
        'Standard Question Language',
        'Structured Quick Language',
      ],
      answer: 1,
    },
    {
      question: 'What is the command to initialize a Git repository?',
      options: [
        'git start',
        'git init',
        'git create',
        'git clone',
      ],
      answer: 1,
    },
    {
      question: 'Which programming language is used for AI and ML the most?',
      options: ['Python', 'C++', 'Java', 'Ruby'],
      answer: 0,
    },
    {
      question: 'Which of these is a NoSQL database?',
      options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
      answer: 2,
    },
    {
      question: 'What is the full form of HTML?',
      options: [
        'HyperText Markup Language',
        'HighText Machine Language',
        'HyperTool Multi Language',
        'HyperText Machine Language',
      ],
      answer: 0,
    },
    {
      question: 'Which CSS property is used to change the text color?',
      options: ['font-color', 'text-color', 'color', 'foreground-color'],
      answer: 2,
    },
    {
      question: 'What is the use of "useEffect" in React?',
      options: [
        'To fetch data',
        'To handle side effects',
        'To update the state',
        'To handle events',
      ],
      answer: 1,
    },
    {
      question: 'Which company developed JavaScript?',
      options: [
        'Microsoft',
        'Netscape',
        'Oracle',
        'Google',
      ],
      answer: 1,
    },
  ];

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleSubmitTest = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className={styles.mockTestContainer}>
      {!showResult ? (
        <div>
          <h2>Mock Test</h2>
          <div className={styles.questionBox}>
            <p className={styles.question}>
              <span className={styles.questionNumber}>
                Q{currentQuestionIndex + 1}.
              </span>{' '}
              {questions[currentQuestionIndex].question}
            </p>
            <div className={styles.options}>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className={selectedAnswer === index ? styles.selected : ''}
                  onClick={() => handleAnswerSelection(index)}
                >
                  {option}
                </button>
              ))}
            </div>
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className={styles.nextButton}
                disabled={selectedAnswer === null}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmitTest}
                className={styles.submitButton}
                disabled={selectedAnswer === null}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.result}>
          <h2>Your Score: {score}/{questions.length}</h2>
          <button onClick={resetTest} className={styles.resetButton}>
            Restart Test
          </button>
        </div>
      )}
    </div>
  );
};

export default MockTest;
