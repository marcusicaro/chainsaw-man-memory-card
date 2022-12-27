import React from 'react'

export default function Score(props) {

  return (
    <div id='score'>
        <p><b>Best score: {props.bestScore}</b></p>
        <p><b>Current score: {props.currentScore}</b></p>
    </div>
  )
}
