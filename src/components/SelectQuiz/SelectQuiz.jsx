import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectQuiz.css'

export default function SelectQuiz({ quizzes, character }) {
  const navigate = useNavigate();
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleStartQuiz = () => {
    // Call the onStartQuiz function and pass the selectedQuiz to start the quiz
    navigate(`/quiz/${selectedQuiz}`);
  };

  return (
    <div className='SelectQuiz'>
      <h2>Select a Quiz for {character}</h2>
        <select value={selectedQuiz} onChange={(e) => setSelectedQuiz(e.target.value)}>
        <option value="">Select a Quiz</option>
        {quizzes
          .filter((quiz) => quiz.character === character)
          .map((quiz) => (
            <option key={quiz._id} value={quiz._id}>
              {quiz.title}
            </option>
            ))
        }
      </select>
      <button onClick={handleStartQuiz} disabled={!selectedQuiz}>
        Start Quiz
      </button>
    </div>
  );
}
