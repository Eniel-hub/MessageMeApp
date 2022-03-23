import React, { useEffect } from "react"
import blackBackground from './imgs/background/dark-mode.png'
import lightBackground from './imgs/background/light-mode.png'
import Button from "./components/Button"
import Name from './components/Name'
import Login from './components/Login'
import Register from './components/Register'


let isDarkTheme = false;
function App() {

  useEffect(() => {
    const background = isDarkTheme ? blackBackground : lightBackground

    document.body.style.backgroundImage = `url(${background})`;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const Theme = () =>{
    isDarkTheme = !isDarkTheme

    const background = isDarkTheme ? blackBackground : lightBackground
    document.body.style.backgroundImage = `url(${background})`;

    useEffect()
  }

  return (
    <div className="App">
      <Name />

      <Login />

      {/* <Register /> */}

    {/* <Button onClick={Theme} /> */}
  </div>
);
}

export default App;
