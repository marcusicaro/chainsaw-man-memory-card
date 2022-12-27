import React from 'react'

export default function Score(props) {

  return (
    <div id='score'>
        <p id='current'><b>Current score: {props.currentScore}</b></p>
        <p id='best'><b>Best score: {props.bestScore}</b></p>
    </div>
  )
}
