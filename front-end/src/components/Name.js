import React from 'react'
import logo from '../imgs/logo1.png'
const Name = () => {
    const imgStyle = {
        maxWidth : '40px',
        maxHeight : '40px'
    }
    const barStyle = {
        textDecorationThickness: '15px'
    }
    const titleStyle = {
        marginLeft : '5px',
        fontSize: '1.25em'
    }
  return (
    <div style={{backgroundColor: '#43876E'}} className='div-name'>
        <h1 style={barStyle}>
            <img src= {logo} alt="nothing to show" style={imgStyle}/>
            <span style={titleStyle}>MessageMeApp</span>
        </h1>
    </div>
  )
}

export default Name