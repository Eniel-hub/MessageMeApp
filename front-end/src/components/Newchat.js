import {BiMessageSquareAdd} from 'react-icons/bi'

const Newchat = ({newMessage}) => {
    const newMessageStyle = {
        height : '45px',
        width : '45px',
        margin: 'auto'
    }
  return (
    <div>
        <BiMessageSquareAdd onClick={newMessage} style={newMessageStyle}/>
    </div>
  )
}

export default Newchat