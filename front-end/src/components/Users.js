import { useEffect, useState } from "react"
import Search from './Search'
import Dashboard from './Dashboard'
import users from '../samples/sampleUsers.json'
import profilePictureDefault from '../imgs/profilePictureDefault.jpg'

const Users = ({User, themeCon}) => { 
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

  return (
    <div>
        <Dashboard username = {User} searchButton = {searchButton}/>

        <div className="app-content">
          {showsearch && <Search searchButton = {searchButton} search = {search}/>}
          {
            users && users.map( user => {
              if (user.username !== User){
                return (
                  <div className="user-list" key={user.id}>
                      <div className="user-list-img">
                        <img 
                          src= {profilePictureDefault} 
                          alt='nothing to show'
                          className='pp-user-list'
                        />
                      </div>
                      <div className="user-list-username">
                        {user.username}
                      </div>
                      <div className="user-list-about">
                        {user.about}
                      </div>
                  </div>
                )
              }
            })
          }
        </div>
    </div>
  )
}

export default Users