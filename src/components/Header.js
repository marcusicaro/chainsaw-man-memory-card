import React from 'react'
import denji from './imgs/denji.png'
import logo from './imgs/logo.png'

export default function Header() {
  return (
    <header>
        <div id='logo-container'>
        <img src={denji} alt='Denji and Pochita' id='denji-image'/>

        <img src={logo} alt='Denji and Pochita' id='logo'/>
        </div>

    </header>
  )
}
