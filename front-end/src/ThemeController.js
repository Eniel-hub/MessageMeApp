import React, { useEffect } from "react"
import blackBackground from './imgs/background/dark-mode.png'
import lightBackground from './imgs/background/light-mode.png'

const ThemeController = ({isDarkTheme, path}) => {
    const pathname = window.location.pathname

    let bgColor = isDarkTheme ? 'rgba(17, 34, 51, 0.5)' : 'rgba(255, 255, 255, .4)'
    let bgColor2 = isDarkTheme ? 'rgba(45, 16, 71, .87)' : 'rgba(219, 57, 152, .87)'
    let bgColor3 = isDarkTheme ? 'rgba(45, 16, 71, .87)' : 'rgba(230, 85, 208, .75)'
    let txtColor = isDarkTheme ? '#fff' : '#112233'
    let background = isDarkTheme ? blackBackground : lightBackground
    document.body.style.backgroundImage = `url(${background})`
    document.querySelector('.iconTheme').style.color = bgColor
    
    if (pathname == '/login' || pathname == '/register'){
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
    else if(pathname == '/chats' || pathname == '/users' || pathname =='/feeds'){
      document.querySelector('.user-rounded-div-2').style.backgroundColor = bgColor2
      document.querySelector('.user-rounded-div').style.backgroundColor = bgColor2
      document.querySelector('.user-name-div').style.backgroundColor = bgColor2
      document.querySelector('.app-content').style.backgroundColor = bgColor3
      document.querySelector('.navbar').style.backgroundColor = bgColor2
    }

}

export default ThemeController