import Dashboard from './Dashboard'
import { useEffect, useState } from "react"
import Search from './Search'

const Feeds = ({User, themeCon}) => { 
  const [showsearch, setshowsearch] = useState(false)

  const searchButton = () => {
    setshowsearch(!showsearch)
  }

  const search = () => {
    console.log('function for search')
  }
  useEffect(() => { //load the theme
    themeCon()
  });
  return (
    <div>
        <Dashboard username = {User} searchButton = {searchButton}/>
        <div className="app-content">
          {showsearch && <Search searchButton = {searchButton} search = {search}/>}
          
          <p>List of Feeds</p>
        </div>
    </div>
  )
}

export default Feeds