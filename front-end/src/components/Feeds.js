import Dashboard from './Dashboard'
import { useEffect, useState } from "react"
import Newfeed from './Newfeed'
import Search from './Search'
import feeds from '../samples/sampleFeeds.json'
import profilePictureDefault from '../imgs/profilePictureDefault.jpg'
import {AiOutlineMessage, AiOutlineLike, AiOutlineDislike} from "react-icons/ai"
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

  const newFeed = () =>{
    console.log('newFeed')
  }

  const hasLiked = (users) =>{
    const hasliked = users.filter(user =>{
      if(user.username == User){
        return user
      }
    })
    return hasliked[0] ? true : false
  }

  const hasDisliked = (users) =>{
    const hasdisliked = users.filter(user =>{
      if(user.username == User){
        return user
      }
    })
    return hasdisliked[0] ? true : false
  }

  const hasCommented = (users) =>{
    const hascommented = users.filter(user =>{
      if(user.author == User){
        return user
      }
    })
    return hascommented[0] ? true : false
  }

  return (
    <div>
        <Dashboard username = {User} searchButton = {searchButton}/>
        <div className="app-content" style={{height : 'fit-content'}}>
          {showsearch && <Search searchButton = {searchButton} search = {search}/>}
        </div>
        <div className={`app-content ${showsearch ? 'app-content-m' : 'app-content-M'}`}>
          {
            feeds && feeds.map( feed => {
              return (
                <div className="feed-list" key={feed.id}>
                  <div className="feed-list-cpn">
                    <div className="feed-list-img">
                      <img 
                        src= {profilePictureDefault} 
                        alt='nothing to show'
                        className='pp-user-list'
                      />
                    </div>
                    <div className="feed-list-author">
                      {feed.author}
                    </div>
                    <div className="feed-list-title">
                      {feed.title}
                    </div>
                    <div className="feed-list-content">
                      {
                        feed.content.length >= 171 ? feed.content.slice(0, 171)+'...' : feed.content
                      }
                    </div>
                  </div>
                  <div className="feed-list-reactions">
                    <div className={`feed-list-reaction ${hasCommented(feed.comments.list) && 'feed-list-commented'}`}>
                    {feed.comments.counter}
                    <AiOutlineMessage style={{width : '15px', height : '15px', marginRight : '1%'}}/>
                    </div>
                    <div className={`feed-list-reaction ${hasLiked(feed.like.list) && 'feed-list-liked'}`}>
                    {feed.like.counter}
                    <AiOutlineLike style={{width : '15px', height : '15px', marginRight : '1%'}}/>
                    </div>
                    <div className={`feed-list-reaction ${hasDisliked(feed.dislike.list) && 'feed-list-disliked'}`}>
                    {feed.dislike.counter}
                    <AiOutlineDislike style={{width : '15px', height : '15px', marginRight : '1%'}}/>
                    </div>
                  </div>
                    
                </div>
              )
            })
          }
          <div className={`newFeed-div ${showsearch && 'newFeed-div-m'}`}>
            <Newfeed newFeed = {newFeed}/>
          </div>
        </div>
    </div>
  )
}

export default Feeds