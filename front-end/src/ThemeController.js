import React, { useEffect } from "react"
import blackBackground from './imgs/background/dark-mode.png'
import lightBackground from './imgs/background/light-mode.png'

const ThemeController = ({isDarkTheme}) => {
    const bgColor = isDarkTheme ? 'rgba(17, 34, 51, 0.5)' : 'rgba(255, 255, 255, .4)'
    const txtColor = isDarkTheme ? '#fff' : '#112233'
    const background = isDarkTheme ? blackBackground : lightBackground
    document.body.style.backgroundImage = `url(${background})`
    document.querySelector('.content').style.backgroundColor = bgColor
    document.querySelector('.content').style.color = txtColor
    document.querySelectorAll('input').forEach(input =>{
      input.style.backgroundColor = bgColor
      input.style.color = txtColor
      input.style.borderColor = '#fff'
    })
    document.querySelector('.btn-submit').style.backgroundColor = '#298181'
    document.querySelector('.btn-submit').style.color = '#fff'
    
}

export default ThemeController