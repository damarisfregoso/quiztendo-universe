import './WelcomePage.css'

export default function WelcomePage({ user }) {
  return (
    <div className='WelcomePage'>
      <h1>Welcome {user.name} </h1>
    </div>
  );
}