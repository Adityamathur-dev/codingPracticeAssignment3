import './index.css'

const NavBar = props => {
  const {score, time} = props

  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="scores-timer-container">
          <p>
            Score:<span className="score">{score}</span>
          </p>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-img"
            />
            <p className="time">{time} sec</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
