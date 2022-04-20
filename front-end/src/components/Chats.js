import {useState, useEffect} from 'react'
import Dashboard from './Dashboard'
import Search from './Search'
import chats from '../samples/sampleChats.json'
import Newchat from './Newchat'
import profilePictureDefault from '../imgs/profilePictureDefault.jpg'


const Chats = ({User, themeCon}) => { 
  const [showsearch, setshowsearch] = useState(false)

  const searchButton = () => {
    setshowsearch(!showsearch)
  }

  const search = () => {
    console.log('function for search')
  }

  useEffect(() => { //load the theme
    themeCon()
  });

  const userChats = chats && chats.filter( chat =>{
    if(chat.users[0].username == User 
        || chat.users[1].username == User){
      return chat
    }
  })
  // const chatMsgs = messages && messages.filter(message => {
  //   if(message.Chatid === )
  // })

  const newMessage = () => {
    console.log('newMessage')
  }

  return (
    <div>
        <Dashboard username = {User} searchButton = {searchButton}/>
        <div className="app-content" style={{height : 'fit-content'}}>
          {showsearch && <Search searchButton = {searchButton} search = {search}/>}
        </div>
        <div className={`app-content ${showsearch ? 'app-content-m' : 'app-content-M'}`}>
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

          <div className={`newMessage-div ${showsearch && 'newMessage-div-m'}`}>
            <Newchat newMessage = {newMessage}/>
          </div>
        </div>
    </div>
  )
}

export default Chats