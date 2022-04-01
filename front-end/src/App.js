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
  Routes,
  Route
} from "react-router-dom";


let isDarkTheme = false;
function App() {
  useEffect(() => {
    const background = isDarkTheme ? blackBackground : lightBackground
    document.body.style.backgroundImage = `url(${background})`
  }, []);

  const themeCon = () =>{
    isDarkTheme = !isDarkTheme
    ThemeController({isDarkTheme})
    // useEffect()
  }

  // const theme = Theme;

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Routes>

        <Button onClick={themeCon} />
    </div>
</Router>
);
}

export default App;
