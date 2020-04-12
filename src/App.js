import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  // Route,
  Link
} from "react-router-dom";
import 'styles/app.scss'
import logo from 'static/images/udkc-logo-blue-standard.png'

// TODO: set up routing

function App() {
  return (
    <Router>
      <header>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-container">

        </nav>
      </header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Početna - placeholder</Link>
            </li>
            <li>
              <Link to="/kosarka">Košarka</Link>
            </li>
            <li>
              <Link to="/nogomet">Nogomet</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/*<Route path="/about">*/}
          {/*  <About />*/}
          {/*</Route>*/}
          {/*<Route path="/users">*/}
          {/*  <Users />*/}
          {/*</Route>*/}
          {/*<Route path="/">*/}
          {/*  <Home />*/}
          {/*</Route>*/}
        </Switch>
      </div>
    </Router>
  )
}

export default App
