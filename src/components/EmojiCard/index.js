import './index.css'

const EmojiCard = props => {
  const {emojiItem, gameCompleted, updateGameScore} = props
  const {id, emojiName, emojiUrl} = emojiItem

  const updateScore = () => {
    updateGameScore(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-btn" type="button" onClick={updateScore}>
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
