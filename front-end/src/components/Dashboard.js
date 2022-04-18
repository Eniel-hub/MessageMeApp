import React from 'react'
import { AiFillPrinter } from 'react-icons/ai'
import Navbar from './Navbar'
import UserDiv from './UserDiv'

const Dashboard = ({username, searchButton}) => {
  return (
    <div>
        <UserDiv 
          username = {username} 
          searchButton = {searchButton}
        />
        <Navbar />
    </div>
  )
}

export default Dashboard