import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Auth from './auth'
import Game from './components/Game'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { login, setPlayer } from './actions'


function App() {
  const serverUri = process.env.REACT_APP_API_URL || 'https://server-tictactoe.herokuapp.com'
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(serverUri + '/isloggedin', { credentials: 'include' })
      .then(res => {
        if (res.ok)
          res.json()
            .then(data => {
              dispatch(login(data.token))
              dispatch(setPlayer(data.player))
            })
      })
  }, [serverUri, dispatch])
  return (
    <div className="App">
      <Router>
        <Header />

        <Game />

        <Route path={["/login", "/signup", "/logout"]}>
          <Auth />
        </Route>

      </Router>

    </div>
  );
}

export default App;
