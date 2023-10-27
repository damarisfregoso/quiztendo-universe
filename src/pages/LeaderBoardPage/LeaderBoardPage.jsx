import { useState, useEffect } from 'react';
import * as resultsAPI from '../../utilities/results-api';
import './LeaderBoardPage.css'

export default function LeaderBoardPage({ quizzes }) {
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    if (selectedQuiz) {
      async function getLeaderScore() {
        try {
          const data = await resultsAPI.getLeaderBoard(selectedQuiz);
          setLeaderBoard(data);
        } catch (error) {
          console.error('Error fetching leaderboard:', error);
        }
      }
      getLeaderScore();
    }
  }, [selectedQuiz]);

  return (
    <div className="LeaderBoardPage">
      <h1>Leader Board</h1>
      <select value={selectedQuiz} onChange={(e) => setSelectedQuiz(e.target.value)}>
        <option value="">View Leader Board For:</option>
        {quizzes
          .map((quiz) => (
            <option key={quiz._id} value={quiz._id}>
              {quiz.title}
            </option>
            ))
        }
      </select>

      <div>
      <table className='custom-table'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Quizzes Taken</th>
            <th>Average Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderBoard.map((entry, index) => (
            <tr key={entry._id}>
              <td>{index + 1}</td>
              <td>{entry.user}</td>
              <td>{entry.numQuizzes}</td>
              <td>{(entry.totalScore / entry.numQuizzes).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}