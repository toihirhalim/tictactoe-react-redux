import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Auth from './auth'
import Game from './components/Game'
import Header from './components/Header';

function App() {
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
