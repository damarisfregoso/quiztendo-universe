import './QuestionDisplay.css'

export default function QuestionDisplay({ question, score }) {

  console.log('does this work', question);

  return(
    <section>
      <h2 className='tracking'>Current Score: {score}</h2>
      <h2 className='tracking'>Question {question.sequence} of 5</h2>
      <div className="QuestionDisplay">
        <h3>{question.prompt}</h3>
        <ul>
          {question.choices.map((choice) => (
            <li key={choice.choice}> {choice.prompt}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}