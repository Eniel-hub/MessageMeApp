import profilePictureDefault from '../imgs/profilePictureDefault.jpg'
import { AiOutlineMenu } from 'react-icons/ai'

const UserDiv = ({username}) => {

  return (
    <div className='user-div'>
      <div className='user-name-div'>
        <span className='username-user-div'>
        {username} {/*  max 13 chars */}
        </span>
      </div>
      <div className='user-rounded-div'>
        <img 
          src= {profilePictureDefault} 
          alt='nothing to show'
          className='pp-user-div'
        />
      </div>
      <div className='user-rounded-div-2'>
        <AiOutlineMenu 
          className='menu-user-div'
        />
      </div>      
    </div>
  )
}

export default UserDiv