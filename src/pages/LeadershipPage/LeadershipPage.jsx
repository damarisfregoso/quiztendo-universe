import { useState } from 'react';
import * as resultsAPI from '../../utilities/results-api';
import './LeadershipPage.css'

export default function LeadershipPage({ quizzes }) {
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(function() {
    async function getLeaderScore() {
      try {
        const data = await resultsAPI.getAllScores(selectedQuiz);
        setLeaderboard(data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    }
    getLeaderScore()
  }, [selectedQuiz])

  return (
    <div className="LeadershipPage">
      <h1>Leadership Board</h1>
      <select value={selectedQuiz} onChange={(e) => setSelectedQuiz(e.target.value)}>
        <option value="">Select a Quiz</option>
        {quizzes
          .map((quiz) => (
            <option key={quiz._id} value={quiz._id}>
              {quiz.title}
            </option>
            ))
        }
      </select>

      <div>

      </div>
    </div>
  )
}