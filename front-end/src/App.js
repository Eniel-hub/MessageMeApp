import { useEffect } from "react"
import Name from './components/Name'
import Login from './components/Login'
import Register from './components/Register'
import users from './samples/sampleUsers.json'
import ThemeController from './ThemeController'
import Users from './components/Users'      
import Chats from './components/Chats'      
import Feeds from './components/Feeds'      
import {
  Outlet,
  Routes,
  Route
} from "react-router-dom";

const UserName = 'user1'
let isDarkTheme = UserName == '' ? false : users.filter( user =>{
  if (user.username === UserName){
    return user
  }
}).map( user => { return user.darkTheme})[0]
function App() {
  //useEffect to initiate the theme configuration.
  useEffect(() => {
    theme()
  }, []);

  //themeCon fction to change the theme
  const themeCon = () =>{
    isDarkTheme = !isDarkTheme
    theme()
  }

  const theme = (path) =>{
    ThemeController({isDarkTheme, path})
  }

  return (    
      <div className="App">
        <Name 
          changeTheme = {themeCon} //icon that changes the theme
        />
        <Outlet />
        <Routes>
          <Route //route to register
            path="register" 
            element={
              <Register 
                themeCon = {theme} //load the theme\
                path="register"
              />
            } 
          />
          <Route //route to login
            path="login" 
            element={
              <Login 
                themeCon = {theme}
                path="login" 
              />
            } 
          />
          <Route 
            path = "users"
            element = {
              <Users 
                User = {UserName}
                themeCon = {theme}
                path = "users"/>
            } />
            <Route 
            path = "chats"
            element = {
              <Chats 
                User = {UserName}
                themeCon = {theme}
                path = "chats"/>
            } />
            <Route 
            path = "feeds"
            element = {
              <Feeds 
                User = {UserName}
                themeCon = {theme}
                path = "feeds"/>
            } />
        </Routes>
    </div>
  )
}

export default App
