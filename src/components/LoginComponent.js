import React, { useState } from 'react'
import './LoginComponent.css';
import SweetAlert from 'react-bootstrap-sweetalert';
import { getAllUsers } from './../services/service';

export default function LoginComponent() {
    const [state, setState] = useState({ show: false });
    const [loginData, setData] = useState({ username: '', password: '' });
    const onConfirm = () => {
        setState({ show: false });
    }
    const onClick = () => {
        setState({ show: true });
    }
    const login = (event) => {
        if (loginData.username && loginData.password) {
            getAllUsers('https://611d20157d273a0017e2f68d.mockapi.io/users').then(res => {
                console.log(res);
                const userData = res.find(ele => ele.userName === loginData.username);
                console.log(userData);
                if (userData) {
                    if (userData.password === loginData.password) {
                        alert('Logged In')
                    }
                    else {
                        alert('Incorrect password! please try again')
                    }
                }
            });
        }
        else {
            alert("Please enter credentials!")
        }
        event.preventDefault();
    }
    const handleData = (event) => {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }
    return (
        <>
            <div className="navwrapper flex bg-color">
                <div>
                    <h1 className="logowrapper">faceLook</h1>
                </div>
                <div>
                    <table className="tablewrapper">
                        <tbody>
                            <tr>
                                <td className="row1">Email or Phone</td>
                                <td className="row1">Password</td>
                            </tr>
                            <tr>
                                <td><input name="username" value={loginData.username} type="text" onChange={handleData} className="form-control inputtext m-0" />
                                </td>
                                <td><input name="password" value={loginData.password} type="password" onChange={handleData} className="form-control inputtext m-0" />
                                </td>
                                <td>
                                    <div className="btn" id="button" onClick={login}>Log In</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row2">
                                        <input type="checkbox" />
                                        Keep me logged in
                                    </div>
                                </td>
                                <td className="row2 h">Forgot your password?</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="navwrapper flex pad-top">
                <div>
                    <form>
                        <div className="container">
                            <h3>Sign Up: It's free</h3>
                            <p>Please fill in this form to create an account.</p>
                            <hr></hr>
                            <label htmlFor="firstName"><b>First Name</b></label>
                            <input type="text" placeholder="Enter First Name" name="firstName" required />

                            <label htmlFor="lastName"><b>Last Name</b></label>
                            <input type="text" placeholder="Enter Last Name" name="lastName" required />

                            <label htmlFor="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

                            <label>
                                <input type="checkbox" name="remember" /> Remember me
                            </label>

                            <p>By creating an account you agree to our <a href="#1" onClick={() => onClick()} >Terms & Privacy</a>.</p>
                            <div className="clearfix">
                                <button type="submit" className="signupbtn">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <SweetAlert
                title={"LOL! You have to agree ^_^"}
                onConfirm={onConfirm}
                show={state.show}
            />
        </>
    )
}
