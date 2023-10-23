import { useState } from 'react';

export default function SelectQuiz({ quizzes, character, onStartQuiz }) {
  const [selectedQuiz, setSelectedQuiz] = useState('');

  const handleStartQuiz = () => {
    // Call the onStartQuiz function and pass the selectedQuiz to start the quiz
    onStartQuiz(selectedQuiz);
  };

  return (
    <div className='SelectQuiz'>
      <h2>Select a Quiz for {character}</h2>
      <select value={selectedQuiz} onChange={(e) => setSelectedQuiz(e.target.value)}>
        <option value="">Select a Quiz</option>
        {quizzes.filter((quiz) => quiz.character === character).map((quiz) => (
            <option key={quiz.id} value={quiz.id}>
              {quiz.title}
            </option>
          ))}
      </select>
      <button onClick={handleStartQuiz} disabled={!selectedQuiz}>
        Start Quiz
      </button>
    </div>
  );
}
