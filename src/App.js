import React from 'react'
import 'styles/app.scss'
import logo from 'static/images/udkc-logo-blue-standard.png'
import Container from 'components/container'

function App() {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-container">
          <ul className="">
            <li>
              <a href="https://www.kresimircosic.com/hr/o-nama/">O nama</a>
            </li>
            <li
              // className="selected"
            >
              <a href="https://www.kresimircosic.com/hr/kresimir-cosic/zivotopis/">Krešimir Ćosić</a>
            </li>
            <li>
              <a href="https://www.kresimircosic.com/hr/vijesti/">Vijesti</a>
            </li>
            <li>
              <a href="https://www.kresimircosic.com/hr/knjiga-sjecanja/">Knjiga sjećanja</a>
            </li>
            <li>
              <a href="https://www.kresimircosic.com/hr/shop/">Kupnjom doniraj</a>
            </li>
            <li>
              <a href="https://www.kresimircosic.com/hr/kontakt/">Kontakt</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="page-container">
        {/*<nav>*/}
        {/*  <ul>*/}
        {/*    <li>*/}
        {/*      /!*<Link to="/">Početna - placeholder</Link>*!/*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      /!*<Link to="/kosarka">Košarka</Link>*!/*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      /!*<Link to="/nogomet">Nogomet</Link>*!/*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</nav>*/}

        <Container />
      </div>
    </div>
  )
}

export default App
