import React, { useEffect } from "react"
import blackBackground from './imgs/background/dark-mode.png'
import lightBackground from './imgs/background/light-mode.png'

const ThemeController = ({isDarkTheme}) => {
    const pathname = window.location.pathname

    let bgColor = isDarkTheme ? 'rgba(17, 34, 51, 0.5)' : 'rgba(255, 255, 255, .4)'
    let bgColor2 = isDarkTheme ? 'rgba(45, 16, 71, .87)' : 'rgba(219, 57, 152, .87)'
    let bgColor3 = isDarkTheme ? 'rgba(45, 16, 71, .75)' : 'rgba(230, 85, 208, .7)'
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
      document.querySelectorAll('.app-content').forEach(input =>{
        input.style.backgroundColor = bgColor3
        // input.style.color = txtColor
      })
      document.querySelector('.navbar').style.backgroundColor = bgColor2
      if(pathname == '/chats'){
        const newMessageButton = document.querySelector('.newMessage-div')
        newMessageButton.addEventListener('mouseover', ()=>{
          newMessageButton.style.color = '#fff'
         // reset the color after a short delay
          setTimeout(() => {
            newMessageButton.style.color = isDarkTheme ? '#43876E' : '#112233'
          }, 500);
        })
        newMessageButton.style.color = isDarkTheme ? '#43876E' : '#112233'
      }

      if(pathname == '/feeds'){
        const newFeedButton = document.querySelector('.newFeed-div')
        newFeedButton.addEventListener('mouseover', ()=>{
          newFeedButton.style.color = '#fff'
         // reset the color after a short delay
          setTimeout(() => {
            newFeedButton.style.color = isDarkTheme ? 'rgba(67, 135, 110, .7)' : 'rgba(17, 34, 51, .7)'
          }, 500);
        })
        newFeedButton.style.color = isDarkTheme ? 'rgba(67, 135, 110, .7)' : 'rgba(17, 34, 51, .7)'
      }
    }

}

export default ThemeController