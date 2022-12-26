import React, { useState } from 'react'
import Cards from './Cards'
import Score from './Score'

export default function Main() {
  const [state, setState] = useState({
    score: {
      current: 0,
      best: 0
    },
  });

  const handleIncreaseScore = () => {
    // setState( 
    //   {
    //   ...state,
    //   score: {
    //     ...state.score,
    //     current: state.score.current + 1
    //   }
    // })
    setState((prevState) => {
      if(prevState.score.current === prevState.score.best)
      return {score: {
        current: prevState.score.current + 1,
        best: prevState.score.current + 1
      }}
      return {
        score: {
          ...prevState.score,
          current: prevState.score.current + 1
        }
      }
    })
  }

  const handleResetScore = () => {
    setState({
      ...state,
      score: {
        ...state.score,
        current: 0,
      }
    })
  } 

  const {score} = state
  return (
    <div>
      <Score currentScore={score.current} bestScore={score.best}/>
      <Cards handleResetScore={handleResetScore} handleIncreaseScore={handleIncreaseScore}/>
    </div>
  )
}
