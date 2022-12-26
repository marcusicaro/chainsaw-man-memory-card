import React, { useEffect, useState } from 'react'

export default function Score(props) {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        setScore(props.currentScore);
        setBestScore(props.bestScore)
    },)

  return (
    <div>
        <p><b>Best score: {bestScore}</b></p>
        <p><b>Current score: {score}</b></p>
    </div>
  )
}
