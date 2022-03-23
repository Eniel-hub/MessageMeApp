import Proptypes from 'prop-types'

const Button = ({onClick}) => {
    const buttonStyle = {
        backgroundColor : 'steelblue'
    }
    return (
        <button 
            onClick={onClick} 
            style={buttonStyle} 
            className = 'btn'
        >
            clique moi
        </button>
    )
}

Button.propTypes = {
    onClick : Proptypes.func
}

export default Button