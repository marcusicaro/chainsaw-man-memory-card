import React, { useState } from 'react'
import uniqid from 'uniqid';

export default function Cards(props) {
    const getInitialShuffle = () => shuffleArray([
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/2/23/Power.png',
            name: 'Power',
            clicked: false,
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/9/91/Himeno.png',
            name: 'Himeno',
            clicked: false,
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/6/69/Kobeni.png',
            name: 'Kobeni',
            clicked: false,
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/c/c9/Makima_Control.png',
            name: 'Makima',
            clicked: false,
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/0/09/Reze.png',
            name: 'Reze',
            clicked: false,
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/c/c6/Quanxi.png',
            name: 'Quanxi',
            clicked: false,
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/0/0f/Sawatari.png',
            name: 'Akane',
            clicked: false,
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/4/43/Asa_Mitaka.png',
            name: 'Asa',
            clicked: false,
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/b/b5/Yuko.png',
            name: 'Yuko',
            clicked: false,
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/3/39/War_Devil_Face.png',
            name: 'Yoru',
            clicked: false,
            id: uniqid(),
        },
    ])
    const [cards, setCards] = useState(getInitialShuffle);

    const handleCardClick = (card) => {
        const cardsCopy = [...cards];

        if (!card.clicked) {
            cardsCopy.forEach(el => {(el.id === card.id) && (el.clicked = !el.clicked)})
            setCards(() => shuffleArray(cardsCopy))
            return props.handleIncreaseScore();
        }

        cardsCopy.forEach(el => {el.clicked = false})
        setCards(getInitialShuffle)
        return props.handleResetScore()
    }

    const handleCardsRender = () => {
        return cards.map(card => ( 
            <div className='card' key={card.id} onClick={() => {handleCardClick(card)}}>
                <img className='waifu' src={card.image} alt={card.name}/>
                <p>{card.name}</p>
            </div>
        ))
    }


  return (
    <div className='cards-container'>
        {handleCardsRender()}
    </div>
  )
}


function shuffleArray(array) {
    const cardsCopy = [...array];
    for (let i = cardsCopy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cardsCopy[i];
        cardsCopy[i] = cardsCopy[j];
        cardsCopy[j] = temp;
    }
    return cardsCopy
}