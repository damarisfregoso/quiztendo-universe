import { Link } from 'react-router-dom';
import './WelcomePage.css'

export default function WelcomePage({ user, characters }) {
  return (
    <div className='WelcomePage'>
      <h1>Welcome {user.name} </h1>
      <h2>Choose a character!</h2>
      <div className='select-characters'>
        {characters.map((character) => ( 
          <Link to={`/quiz/${character.name}`} key={character.name}>
            <div className='single-characters'>
              <img src={character.image} alt={character.name}/>
              <h3>{character.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}