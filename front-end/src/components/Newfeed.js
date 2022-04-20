import {BsFillChatLeftTextFill} from 'react-icons/bs'

const Newchat = ({newFeed}) => {
    const newMessageStyle = {
        height : '40px',
        width : '40px',
        margin: 'auto'
    }
  return (
    <div>
        <BsFillChatLeftTextFill onClick={newFeed} style={newMessageStyle}/>
    </div>
  )
}

export default Newchat