import "./index.css"

import React, { useState, useRef } from 'react'

const Game = ({ verifyLetter, pickedword, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {

  const [ letter, setLetter ] = useState("")
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter)
    setLetter("")
    letterInputRef.current.focus()
  }

  const verifyLetters = (letter, i) => {
    if (guessedLetters.includes(letter)) {
      return <span key={i} className="letter">{letter}</span>
    } else if (letter === " " || letter === "-") {
      return <span key={i} className="disabled">{letter}</span>
    } else {
      return <span key={i} className="blankSquare"></span>
    }
  }

  return (
    <div className="game">
      <div className="points">
        <p>Pontuação - <span>{score}</span></p>
        <p>Você tem <span>4</span> tentativas ao total</p>
        <p>Restam <span>{guesses}</span></p>
      </div>

      <h2>Adivinhe a palavra</h2>

      <h4 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h4>

      <div className="wordContainer">
        {letters.map((letter, i) => (verifyLetters(letter, i)))}
      </div>

      <div className="letterContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" required
            onChange={e => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar</button>
        </form>
      </div>

      <div className="wrogLettersContainer">
        <p>Letras já utilizadas:</p>

        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
    </div>
  )
}

export default Game