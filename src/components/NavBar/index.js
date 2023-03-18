import './index.css'

const NavBar = props => {
  const {score, topScore, gameCompleted} = props

  const showScore = () => (
    <>
      <li>
        <p className="nav-text">Score: {score}</p>
      </li>
      <li>
        <p className="nav-text">Top Score: {topScore}</p>
      </li>
    </>
  )
  return (
    <nav className="navbar-container">
      <div className="nav-content">
        <img
          className="game-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p className="logo-name">Emoji Game</p>
      </div>
      <ul className="nav-menu">{gameCompleted ? null : showScore()}</ul>
    </nav>
  )
}

export default NavBar
