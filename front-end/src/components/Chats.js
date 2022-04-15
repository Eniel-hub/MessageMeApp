import React from 'react'
import Dashboard from './Dashboard'
import chats from '../samples/sampleChats.json'
const User = "user1"

const Chats = ({User}) => {
  return (
    <div>
        <Dashboard username = {User}/>
        <div className="app-content">
          {
            chats && chats.map( chat => {
              return(
                <div className="chat" key={chat.id}>
                  <strong>{chat.id}</strong>
                  <ul>
                    {
                      chat.users && chat.users.map ( user =>{
                        return(
                          <li>{user.username}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Chats