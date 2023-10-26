import { useEffect, useState } from 'react'
import * as resultsAPI from '../../utilities/results-api'
import './MyPastQuizPage.css'

export default function MyPastQuizPage() {
  const [pastQuizzes, setPastQuizzes] = useState([]);

  useEffect(function() {
    async function getQuizzes() {
      const quizzes = await resultsAPI.getBestResults();
      setPastQuizzes(quizzes);
    }
    getQuizzes();
  }, []);
  
  return (
    <div className="MyPastQuizPage">
      <h1>My Past Quizzes</h1>
      <ul>
        {pastQuizzes.map((result) => (
          <li key={result.quiz._id}>
            <div className='past-quiz-display'>
              <h3>{result.quiz.title}:&nbsp; &nbsp;</h3>
              <p>{result.score}%&nbsp; &nbsp;</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}