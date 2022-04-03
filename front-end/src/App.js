import { useEffect } from "react"
import blackBackground from './imgs/background/dark-mode.png'
import lightBackground from './imgs/background/light-mode.png'
import Button from "./components/Button"
import Name from './components/Name'
import Login from './components/Login'
import Register from './components/Register'
import ThemeController from './ThemeController'
import {
  BrowserRouter as Router,
  Outlet,
  Navigate, 
  Route
} from "react-router-dom";


let isDarkTheme = true;
function App() {
  useEffect(() => {
    const background = isDarkTheme ? blackBackground : lightBackground
    document.body.style.backgroundImage = `url(${background})`
    themeCon()
  });

  const themeCon = () =>{
    isDarkTheme = !isDarkTheme
    ThemeController({isDarkTheme})
    // useEffect()
  }

  // const theme = Theme;

  return (
    // <Router>
    
      <div className="App">
        <Name />
        {/* <h1>links</h1>
        <nav>
          <Link to="/register">register</Link> |{" "}
          <Link to="/login">login</Link>
        </nav> */}
        <Outlet />

        {/* <Routes>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Routes> */}

        <Button onClick={themeCon} />
    </div>
//{/* </Router> */}
  )
}

export default App
