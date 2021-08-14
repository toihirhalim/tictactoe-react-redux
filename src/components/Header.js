import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <div className="title">
                <Link to="/" className="link">
                    <h1>Tic Tac Toe</h1>
                </Link>
            </div>
            <div className="auth-links">
                <Link to="login">
                    <button className="auth-btn login-link-btn">Login</button>
                </Link>
                <Link to="signup">
                    <button className="auth-btn signup-link-btn">Sign up</button>
                </Link>
            </div>
        </header>
    )
}
