import { useParams } from "react-router-dom";
import './QuizPage.css'

export default function QuizPage({ chars }) {
  const { character } = useParams();
  const selectedCharacter = chars.find((char) => char.name === character);

  return (
    <div className="QuizPage">
      <h1>{ character }</h1>
      {selectedCharacter && (<img src={selectedCharacter.image} alt={selectedCharacter.name}/>)}
    </div>
  )
}