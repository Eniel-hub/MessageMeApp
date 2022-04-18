import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const pathname = window.location.pathname
  const selected = (path) =>{
    return pathname == path ? 'navbar-menu-selected' : ''
  }

  return (
    <div className='navbar'>
      <div className={`navbar-menu ${selected('/users')} navbar-users`}>
        <Link to='/users'> <button className='navbar-btn'>Users</button></Link>
      </div>
      <div className={`navbar-menu ${selected('/chats')} navbar-chats`}>
        <Link to='/chats'> <button className='navbar-btn'>Chats</button></Link>
        
      </div>
      <div className={`navbar-menu ${selected('/feeds')} navbar-feeds`}>
        <Link to='/feeds'> <button className='navbar-btn'>Feeds</button></Link>
      </div>
    </div>
  )
}

export default Navbar