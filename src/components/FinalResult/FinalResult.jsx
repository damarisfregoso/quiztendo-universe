import { Link } from 'react-router-dom';
import './FinalResult.css'

export default function FinalResult({ quizResult }) {

  const numCorrect = quizResult.numCorrect;
  const numQuestions = quizResult.quiz.questions.length;
  const pctCorrect = Math.round(numCorrect / numQuestions * 100, 0);

    // Determine whether the user won (100% score) or lost (less than 100%)
    const isWin = pctCorrect === 100;
    // Play the appropriate sound based on the result
    const playSound = () => {
      const audioElement = new Audio(isWin ? '/sounds/win.mp3' : '/sounds/lose.mp3');
      audioElement.play();
    };
  
    // Call playSound to play the sound
    playSound();

  return (
    <div className='FinalResult'>
      <h2>Final Results</h2>
      <h3>{numCorrect} out of {numQuestions} correct - {pctCorrect}%</h3>
      <div className='links'>
        <Link to='/'>Take Another Quiz</Link>
        <Link to='/leaderboard'>View Leader Board</Link>
      </div>
    </div>
  )
}