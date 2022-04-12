import { useEffect } from "react"
import Name from './components/Name'
import Login from './components/Login'
import Register from './components/Register'
import ThemeController from './ThemeController'
import Users from './components/Users'      
import Chats from './components/Chats'      
import Feeds from './components/Feeds'      
import {
  Outlet,
  Routes,
  Route
} from "react-router-dom";

let isDarkTheme = true;
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

  const theme = () =>{
    ThemeController({isDarkTheme})
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
              />
            } 
          />
          <Route //route to login
            path="login" 
            element={
              <Login 
                themeCon = {theme}
              />
            } 
          />
          <Route 
            path = "users"
            element = {
              <Users />
            } />
            <Route 
            path = "chats"
            element = {
              <Chats />
            } />
            <Route 
            path = "feeds"
            element = {
              <Feeds />
            } />
        </Routes>
    </div>
  )
}

export default App
