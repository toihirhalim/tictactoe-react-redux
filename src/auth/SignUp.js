import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { generatePassword } from '../aditionalfunctions/randomPasswordGenerator'

export default function SignUp() {
    const serverUri = process.env.REACT_APP_API_URL || 'https://server-tictactoe.herokuapp.com'
    const [error, setError] = useState('')
    const [generatedRandomPassword, setGeneratedRandomPassword] = useState('')
    const [state, setState] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        passwordMachted: true,
        hidePassword: true,
        hideConfirmPassword: true,
        fetch: true,
    })

    useEffect(() => {
        setGeneratedRandomPassword(generatePassword())
    }, [setGeneratedRandomPassword])

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
                            console.log(data)
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
            <h2 className="auth-title">Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div className="auth-label">
                    <label for="username">
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
                    <label for="password" className="auth-label">
                        <p>Choose a Password :</p>
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
                            required
                        />
                        <i className="bi bi-eye-slash eye" onClick={e => setState({ ...state, hidePassword: !state.hidePassword })}></i>
                    </label>

                    <label for="password" className="auth-label">
                        <p>Confirm password :</p>
                        <input
                            type={state.hideConfirmPassword ? "password" : "text"}
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
                        <i className="bi bi-eye-slash eye" onClick={e => setState({ ...state, hideConfirmPassword: !state.hideConfirmPassword })}></i>
                    </label>
                </div>

                <p className="random-password">
                    use this password :
                    <span
                        className="sugested-password"
                        onClick={e => setState({
                            ...state,
                            password: generatedRandomPassword,
                            confirmPassword: generatedRandomPassword,
                            passwordMachted: true
                        })}
                    >{generatedRandomPassword}</span>
                </p>

                <div className="auth-button-container">
                    <button className="auth-button btn" type="submit">Create Account</button>
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
