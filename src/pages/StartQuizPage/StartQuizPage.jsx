import {  useState } from "react";
import { Link, useParams } from "react-router-dom";
import './StartQuizPage.css'
import SelectQuiz from '../../components/SelectQuiz/SelectQuiz'

export default function StartQuizPage({ chars, quizzes}) {
  const { character } = useParams();
  const selectedCharacter = chars.find((char) => char.name === character);

  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleStartQuiz = (quizId) => {
    setSelectedQuiz(quizId);
  }

  return (
    <div className="StartQuizPage">
      <h1>Are you ready to test your knowledge on {character}?</h1>
      {selectedCharacter && <img src={selectedCharacter.image} alt={selectedCharacter.name} />}
      <SelectQuiz quizzes={quizzes} character={character} onStartQuiz={handleStartQuiz} />
      
      <Link to="/">No, I changed my mind</Link>
    </div>
  )
}