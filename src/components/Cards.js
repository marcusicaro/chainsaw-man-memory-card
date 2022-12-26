import React, { useEffect, useState } from 'react'
import uniqid from 'uniqid';

export default function Cards(props) {
    const [state, setState] = useState([
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/2/23/Power.png',
            name: 'Power',
            status: 'not clicked',
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/9/91/Himeno.png',
            name: 'Himeno',
            status: 'not clicked',
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/6/69/Kobeni.png',
            name: 'Kobeni',
            status: 'not clicked',
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/c/c9/Makima_Control.png',
            name: 'Makima',
            status: 'not clicked',
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/0/09/Reze.png',
            name: 'Reze',
            status: 'not clicked',
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/c/c6/Quanxi.png',
            name: 'Quanxi',
            status: 'not clicked',
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/0/0f/Sawatari.png',
            name: 'Akane',
            status: 'not clicked',
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/4/43/Asa_Mitaka.png',
            name: 'Asa',
            status: 'not clicked',
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/b/b5/Yuko.png',
            name: 'Yuko',
            status: 'not clicked',
            id: uniqid(),
        },
        {
            image: 'https://static.wikia.nocookie.net/chainsaw-man/images/3/39/War_Devil_Face.png',
            name: 'Yoru',
            status: 'not clicked',
            id: uniqid(),
        },
    ]);
      
    useEffect(() => {
        const stateCopy = [...state]
        shuffleArray(stateCopy);
        setState(stateCopy);
    }, [])

    const cardClick = (card) => {
        const stateCopy = [...state];

        function handleShuffle() {
            shuffleArray(stateCopy);
            setState(stateCopy);
        }

        if (card.status === 'not clicked') {
            stateCopy.map(el => {if (el.id === card.id) {el.status = 'clicked'}})
            handleShuffle();
            return props.handleIncreaseScore();
        }

        stateCopy.map(el => {el.status = 'not clicked';})
        handleShuffle();
        return props.handleResetScore()
    }

    const cardsRender = () => {
        return state.map(card => ( 
            <div key={card.id} onClick={() => {cardClick(card)}}>
                <img src={card.image} alt={card.name}/>
                <p>{card.name}</p>
            </div>
        ))
    }


  return (
    <div className='cards'>
        {cardsRender()}
    </div>
  )
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}