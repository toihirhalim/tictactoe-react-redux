import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const isLogged = useSelector(state => state.auth.isLogged)

    return (
        <header className="header">
            <div className="title">
                <Link to="/" className="link">
                    <h1>Tic Tac Toe</h1>
                </Link>
            </div>
            {
                isLogged ? (
                    <div className="auth-links">
                        <Link to="logout">
                            <button className="auth-btn login-link-btn">logout</button>
                        </Link>
                    </div>
                ) : (
                    <div className="auth-links">
                        <Link to="login">
                            <button className="auth-btn login-link-btn">Login</button>
                        </Link>
                        <Link to="signup">
                            <button className="auth-btn signup-link-btn">Sign up</button>
                        </Link>
                    </div>
                )
            }

        </header>
    )
}
