import React from 'react';
import './Login.css';
import logo from './spotify.jpg';
import {loginUrl} from './spotify';

function Login() {
    return (
        <div className="login">
            <img src={logo} alt=""/>
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login