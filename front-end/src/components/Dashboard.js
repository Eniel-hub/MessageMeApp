import React from 'react'
import { AiFillPrinter } from 'react-icons/ai'
import Navbar from './Navbar'
import UserDiv from './UserDiv'
import Users from './Users'
import {
  Outlet,
  Routes,
  Route
} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <UserDiv />
        <Navbar />
    </div>
  )
}

export default Dashboard