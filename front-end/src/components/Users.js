import React from 'react'
import Dashboard from './Dashboard'
import users from '../samples/sampleUsers.json'
import profilePictureDefault from '../imgs/profilePictureDefault.jpg'

const Users = ({User}) => {
  return (
    <div>
        <Dashboard username = {User}/>
        <div className="app-content">
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