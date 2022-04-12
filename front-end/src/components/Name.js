import React from 'react'
import logo from '../imgs/logo1.png'
import {CgDarkMode} from 'react-icons/cg'
const Name = ({changeTheme}) => {
    const imgStyle = {
        maxWidth : '30px',
        maxHeight : '30px'
    }
    const barStyle = {
        textDecorationThickness: '15px'
    }
    const titleStyle = {
        marginLeft : '5px',
        fontSize: '1.15em'
    }

  return (
    <div style={{backgroundColor: '#43876E'}} className='div-name'>
        <h1 style={barStyle}>
            <img src= {logo} alt="nothing to show" style={imgStyle}/>
            <span style={titleStyle}>MessageMeApp </span>
            <CgDarkMode 
                className='iconTheme'
                onClick = {changeTheme}
            />
        </h1>
         
    </div>
  )
}

export default Name