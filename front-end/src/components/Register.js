import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import { BiLock } from 'react-icons/bi'
import { useEffect } from "react"
import blackBackground from '../imgs/background/dark-mode.png'
import lightBackground from '../imgs/background/light-mode.png'
import ThemeController from '../ThemeController'

const Register = ({themeCon, isDarkTheme}) => {
    useEffect(() => { //load theme
        themeCon()
    });


    let hasUsername = true;
    let hasPassword = true;
    let isverified = true;

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!username){
            hasUsername = false;
            return
        }

        if(!password){
            hasPassword = false;
            return
        }

        // if(!verification({username, password})){
        //     isverified = false;
        //     return
        // }

        
    }
  return (
    <div className='content'>
        <div className='form-div'>
            <form className="register-form form" onSubmit={onSubmit}>
                <h2>
                    Register
                </h2>
                <div className="form-control">
                    <BiUser />
                    <label> Username:</label> <br />
                    <input 
                        type="text"
                        placeholder="Username"
                        value = {username}
                        onChange={
                            (e) => setUsername(e.target.value)
                        }
                    />
                </div>
                <div className="form-control">
                    <BiLock />
                    <label> Password:</label> <br />
                    <input 
                        type="password"
                        placeholder="Password"
                        value = {password}
                        onChange={
                            (e) => setPassword(e.target.value)
                        }
                    />
                </div>
                <div className="form-control">
                    <BiLock />
                    <label> Retype Password:</label> <br />
                    <input 
                        type="password"
                        placeholder="Password"
                        value = {password2}
                        onChange={
                            (e) => setPassword2(e.target.value)
                        }
                    />
                </div>

                <input type="submit" value="Register" className="btn-submit btn" />
            </form>
            <div className='div-incorrect'>
                <p>{username? "" : "enter a username"}</p>
                <p>{password.length < 8 && "Password is too short"}</p>
                <p>{password2 !== password  && "Passwords don't match"}</p>
            </div>
        </div>
        <div className='div-sign'>
            <p>Already an User?</p>
            <Link to='/login'><button className='btn'>log in</button></Link>

            <p>... here!!!</p>
        </div>
    </div>
  )
}

export default Register