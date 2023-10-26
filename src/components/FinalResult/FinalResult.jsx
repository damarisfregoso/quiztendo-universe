import { Link } from 'react-router-dom';
import './FinalResult.css'

export default function FinalResult({ quizResult }) {

  const numCorrect = quizResult.numCorrect;
  const numQuestions = quizResult.quiz.questions.length;
  const pctCorrect = Math.round(numCorrect / numQuestions * 100, 0);

  return (
    <div className='FinalResult'>
      <h1>Final Results</h1>
      <h2>{numCorrect} out of {numQuestions} correct - {pctCorrect}%</h2>
      <Link to='/'>Take Another Quiz</Link>
    </div>
  )
}