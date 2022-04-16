import React from 'react'
import Dashboard from './Dashboard'
import chats from '../samples/sampleChats.json'
import messages from '../samples/sampleMessages.json'
import profilePictureDefault from '../imgs/profilePictureDefault.jpg'

const Chats = ({User}) => {
  const userChats = chats && chats.filter( chat =>{
    if(chat.users[0].username == User 
        || chat.users[1].username == User){
      return chat
    }
  })
  // const chatMsgs = messages && messages.filter(message => {
  //   if(message.Chatid === )
  // })
  return (
    <div>
        <Dashboard username = {User}/>
        <div className="app-content">
          {
            userChats && userChats.map( chat => {
              return(
                <div className="chats-list" key={chat.id}>
                  <div className="chats-list-img">
                    <img 
                      src= {profilePictureDefault} 
                      alt='nothing to show'
                      className='pp-user-list'
                    />
                  </div>
                  <div className="chats-list-username">
                    { chat.users[0].username != User ? 
                        chat.users[0].username : chat.users[1].username
                    }
                  </div>
                  <div className="chats-list-lastMsg">
                      {
                        "last message of the conversation"
                      }
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Chats