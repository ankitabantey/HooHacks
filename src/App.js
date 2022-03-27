import React from 'react';
import Nav from './Nav';
import About from './components/About';
import Play from './components/Play';
import Score from './components/Score';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
        <h1>Credit Score Game</h1>
          <ul className="nav-links">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/play">Play</Link>
            </li>
            <li>
              <Link to="/score">Score</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path = "/" element={<About />} />
        <Route path = "/play" element={<Play />} />
        <Route path = "/score" element={<Score />} />
        </Routes>
      </div>
    </Router>
  );
}

