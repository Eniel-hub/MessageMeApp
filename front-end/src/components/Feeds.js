import React from 'react'
import Dashboard from './Dashboard'

const Feeds = ({User}) => {
  return (
    <div>
        <Dashboard username = {User}/>
        <div className="app-content">
          <p>List of Feeds</p>
        </div>
    </div>
  )
}

export default Feeds