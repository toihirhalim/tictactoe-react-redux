import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import generatePassword from 'rand-password'
import { useDispatch } from 'react-redux'
import { login, setPlayer } from '../actions'
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { RiFileCopy2Line } from 'react-icons/ri';

export default function SignUp() {
    const dispatch = useDispatch()
    const serverUri = process.env.REACT_APP_API_URL || 'https://server-tictactoe.herokuapp.com'
    const [error, setError] = useState('')
    const [suggestedPassword, setSuggestedPasswordrd] = useState({ value: '', show: false, hover: false })
    const [state, setState] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        passwordMachted: true,
        hidePassword: true,
        fetch: true,
    })

    useEffect(() => {
        setSuggestedPasswordrd({ value: generatePassword(), show: false, hover: false })
    }, [setSuggestedPasswordrd])

    const handleSubmit = e => {
        e.preventDefault();

        if (!state.fetch) return
        setState({ ...state, fetch: false })

        setError('')

        if (state.password !== state.confirmPassword) {
            setError("passwords doesn't macth")
            return
        }

        const body = {
            username: state.username,
            password: state.password
        }

        fetch(serverUri + '/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(body)
        })
            .then(res => {
                if (res.ok)
                    res.json()
                        .then(data => {
                            dispatch(login(data.token))
                            dispatch(setPlayer(data.player))
                            setError('')
                        })
                else {
                    res.json()
                        .then(data => setError(data.msg))
                        .catch(e => setError('something went wrong: please try again'))
                    setState({ ...state, fetch: true })
                }
            })
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title signup-title">Sign up</h1>
            <form onSubmit={handleSubmit}>
                <div className="auth-label">
                    <label htmlFor="username">
                        <p>Choose a username :</p>
                        <input
                            type="text"
                            className="auth-inputs"
                            value={state.username}
                            onChange={e => setState({ ...state, username: e.target.value })}
                            required
                        />
                    </label>
                </div>

                <div className="auth-label">
                    <label htmlFor="password" className="auth-label">
                        <div className="password-title">
                            <p>Choose a Password :</p>
                            {
                                state.password !== '' &&
                                <div className="password-icons">
                                    {
                                        state.hidePassword ?
                                            <FiEye className="icon" onClick={e => setState({ ...state, hidePassword: !state.hidePassword })} /> :
                                            <FiEyeOff className="icon" onClick={e => setState({ ...state, hidePassword: !state.hidePassword })} />
                                    }
                                    <RiFileCopy2Line className="icon" onClick={e => { navigator.clipboard.writeText(state.password) }} />
                                </div>
                            }
                        </div>
                        <input
                            type={state.hidePassword ? "password" : "text"}
                            className="auth-inputs"
                            value={state.password}
                            onChange={e => setState({
                                ...state,
                                password: e.target.value,
                                passwordMachted: state.confirmPassword === '' ||
                                    state.confirmPassword === e.target.value
                            })}
                            onFocus={e => setSuggestedPasswordrd({ ...suggestedPassword, show: true })}
                            onBlur={e => setSuggestedPasswordrd({ ...suggestedPassword, show: false })}
                            required
                        />
                    </label>
                    {
                        (suggestedPassword.show || suggestedPassword.hover) && state.password !== suggestedPassword.value &&
                        <div className="random-password-container"
                            onMouseEnter={e => setSuggestedPasswordrd({ ...suggestedPassword, hover: true })}
                            onMouseLeave={e => setSuggestedPasswordrd({ ...suggestedPassword, hover: false })}
                        >
                            <div className="random-password">
                                <p>
                                    Suggested :
                                    <span
                                        className="sugested-password"
                                        onClick={e => setState({
                                            ...state,
                                            password: suggestedPassword.value,
                                            confirmPassword: suggestedPassword.value,
                                            passwordMachted: true,
                                        })}
                                    >{suggestedPassword.value}</span>
                                </p>
                            </div>
                        </div>
                    }

                    {
                        state.password !== '' &&
                        <label htmlFor="password" className="auth-label">
                            <p>Confirm password :</p>
                            <input
                                type={state.hidePassword ? "password" : "text"}
                                className="auth-inputs"
                                value={state.confirmPassword}
                                onChange={e => setState({
                                    ...state,
                                    confirmPassword: e.target.value,
                                    passwordMachted: state.password === e.target.value
                                })}
                                style={state.passwordMachted ?
                                    { border: 'black solid 1px' } :
                                    { border: 'red solid 1px' }
                                }
                                required
                            />
                        </label>
                    }

                </div>

                <div className="auth-button-container">
                    <button className="auth-button signup-submit-btn" type="submit">Create Account</button>
                </div>

            </form>

            {
                error &&
                <div className="auth-error-container">
                    <p className="auth-error">{error}</p>
                </div>
            }

            <div className="auth-link-to-component">
                <p>
                    Already have an account ? <Link to="login" className="link-redirect">sign in</Link>
                </p>
            </div>

        </div>
    )
}
