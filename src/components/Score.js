import React from 'react'

export default function Score(props) {

  return (
    <div id='score'>
        {props.bestScore === 10 && alert('You won')}
        <p id='current'><b>Current score: {props.currentScore}</b></p>
        <p id='best'><b>Best score: {props.bestScore}</b></p>
    </div>
  )
}
