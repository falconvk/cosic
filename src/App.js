import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  // Route,
  Link
} from "react-router-dom";

// TODO: set up routing

function App() {
  return (
    <Router>
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
