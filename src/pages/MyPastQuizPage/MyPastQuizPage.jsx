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
      <table className="custom-table">
        <thead>
          <tr>
            <th>Quiz Name</th>
            <th>Average Score</th>
          </tr>
        </thead>
        <tbody>
          {pastQuizzes.map((result) => (
            <tr key={result.quiz._id}>
              <td>{result.quiz.title}</td>
              <td>{result.averageScore.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}