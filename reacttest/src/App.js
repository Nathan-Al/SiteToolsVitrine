import React from 'react';
import Card from './Card'
import GuessCount from './GuessCount'
class App extends React.Component {
  handleCardClick(cart,r) {
    console.log(cart,r, 'clicked')
    }
  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className="memory">
          <GuessCount guesses={0} />
          <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
          <Card card="🎉" tapas="GRISELDA"feedback="justMatched" onClick={this.handleCardClick} />
          <Card card="💖" feedback="justMismatched" onClick={this.handleCardClick} />
          <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
          <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
          <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} />
          {won && <p>GAGNÉ !</p>}
      </div>
    )
  }
}

export default App