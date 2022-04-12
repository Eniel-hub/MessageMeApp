import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-menu navbar-users'>
        <Link to='/users'> <button className='navbar-btn'>Users</button></Link>
      </div>
      <div className='navbar-menu navbar-chats'>
        <Link to='/chats'> <button className='navbar-btn'>Chats</button></Link>
        
      </div>
      <div className='navbar-menu navbar-feeds'>
        <Link to='/feeds'> <button className='navbar-btn'>Feeds</button></Link>
      </div>
    </div>
  )
}

export default Navbar