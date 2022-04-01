import { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { BiLock } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Login = () => {
    let hasUsername = true;
    let hasPassword = true;
    let isverified = true;

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
            <form className="login-form form" onSubmit={onSubmit}>
                <h2>
                    LOGIN
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

                <input type="submit" value="Login" className="btn-submit btn" />
            </form>
            <div className='div-incorrect'>
                <p>Username and/or Password incorrect</p>
                <p>Did you forget your username? clique <a>here</a></p>
                <p>Did you forget your password? clique <a>here</a></p>
            </div>
        </div>
        <div className='div-sign'>
            <p>Not yet an User?</p>
            <Link to='/register'><button className='btn'>sign up</button></Link>
            <p>... here!!!</p>
        </div>
    </div>
  )
}

export default Login