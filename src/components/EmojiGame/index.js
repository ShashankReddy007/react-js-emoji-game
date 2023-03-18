/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, emojis: [], gameCompleted: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updateGameScore = id => {
    const {emojisList} = this.props
    const {score, topScore, emojis, gameCompleted} = this.state

    const res = emojis.some(item => {
      if (item.id === id) {
        this.setState({gameCompleted: true})

        return true
      }
      return false
    })

    console.log(res)
    console.log(emojis)

    if (res === false) {
      this.setState(prevState => ({score: prevState.score + 1}))
      const filteredEmoji = emojisList.filter(item => item.id === id)
      this.setState(prevState => ({
        emojis: [...prevState.emojis, ...filteredEmoji],
      }))
    }
  }

  restartGame = () => {
    const {score, topScore, emojis, gameCompleted} = this.state
    this.setState({gameCompleted: false})
    this.setState(prevState => ({
      topScore: prevState.topScore > score ? prevState.topScore : score,
    }))
    this.setState({emojis: []})
    this.setState({score: 0})
  }

  render() {
    const {score, topScore, emojis, gameCompleted} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()
    console.log(shuffledEmojisList)
    return (
      <div className="app-container">
        <NavBar
          score={score}
          topScore={topScore}
          gameCompleted={gameCompleted}
        />
        <div className="emojis-container">
          {gameCompleted ? (
            <WinOrLoseCard
              score={score}
              topScore={topScore}
              restartGame={this.restartGame}
            />
          ) : (
            <ul className="emojis">
              {shuffledEmojisList.map(item => (
                <EmojiCard
                  key={item.id}
                  emojiItem={item}
                  gameCompleted={gameCompleted}
                  updateGameScore={this.updateGameScore}
                />
              ))}
            </ul>
          )}
          {/* // lets see this */}
        </div>
      </div>
    )
  }
}

export default EmojiGame
