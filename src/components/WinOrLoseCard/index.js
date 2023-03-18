import './index.css'

const WinOrLoseCard = props => {
  const {score, topScore, restartGame} = props

  const playAgain = () => {
    restartGame()
  }

  const showTopScore = () => (
    <>
      <h1 className="game-status">You Won</h1>
      <p className="current-score-label">Best Score</p>
      <p className="current-score-value">{score}/12</p>
    </>
  )

  const showScore = () => (
    <>
      <h1 className="game-status">You Lose</h1>
      <p className="current-score-label">Score</p>
      <p className="current-score-value">{score}/12</p>
    </>
  )

  return (
    <div className="card-container">
      <div className="score-container">
        {score === 12 ? showTopScore() : showScore()}
        <button type="button" className="play-again-button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="image-section">
        {score === 12 ? (
          <img
            className="win-or-lose-image"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="won"
          />
        ) : (
          <img
            className="win-or-lose-image"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="lose"
          />
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
