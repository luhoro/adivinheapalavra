import "./index.css"

import React from 'react'

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>

      <h2>Adivinhe a palavra</h2>

      <h4 className="tip">
        Dica sobre a palavra: <span>Sei lá o que</span>
      </h4>

      <div className="wordContainer">
        <span className="letter">a</span>
        <span className="letter">b</span>
        <span className="letter">c</span>
      </div>

      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>

        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
      </div>

      <div className="wrogLettersContainer">
        <p>Letras já utilizadas:</p>

        <span>A</span>
        <span>B</span>
      </div>
    </div>
  )
}

export default Game