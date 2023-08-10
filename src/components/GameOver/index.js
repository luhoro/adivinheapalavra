import "./index.css"

const GameOver = ({retry, score}) => {
  return (
    <div className="game-over">
      <h1>Fim de jogo</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>

      <button onClick={retry}>
        Tente novamente
      </button>
    </div>
  )
}

export default GameOver