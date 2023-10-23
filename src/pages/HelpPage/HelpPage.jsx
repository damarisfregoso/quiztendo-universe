// import * as usersService from'../../utilities/users-service';
import './HelpPage.css'
import { Link } from 'react-router-dom';

export default function HelpPage() {
  return (
    <div className="HelpPage">
      <h1>Guide to play Quiztendo Universe</h1>
      <ol>
        <li style={{color: 'red'}}>Choose a character you would like to test your knowledge for.</li>
        <li>Once you select a quiz you will have a multiple choice options.</li>
        <li style={{color: 'red'}}>Take the test, try your hardest.</li>
        <li>Results will show up on the leadership board.</li>
      </ol>

      <Link to='/'><button>Choose a Player</button></Link>
    </div>
  )
}