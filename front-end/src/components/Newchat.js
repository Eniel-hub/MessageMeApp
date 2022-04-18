import {BiMessageAdd} from 'react-icons/bi'

const Newchat = ({newMessage}) => {
    const newMessageStyle = {
        height : '45px',
        width : '45px',
        margin: 'auto'
    }
  return (
    <div>
        <BiMessageAdd onClick={newMessage} style={newMessageStyle}/>
    </div>
  )
}

export default Newchat