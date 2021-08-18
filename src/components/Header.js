import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const isLogged = useSelector(state => state.auth.isLogged)
    const username = useSelector(state => state.player.username)

    return (
        <header className="header">
            <div className="title">
                <Link to="/" className="link">
                    <h1>Tic Tac Toe</h1>
                </Link>
            </div>
            {
                isLogged ? (
                    <div className="auth-links player-menu">
                        <h3>{username}</h3>
                        <div className="menu">
                            <p>
                                <Link to="#" className="menu-item">
                                    Profile
                                </Link>
                            </p>
                            <p>
                                <Link to="logout" className="menu-item">
                                    Logout
                                </Link>
                            </p>
                        </div>
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

        </header >
    )
}
