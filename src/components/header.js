import React from "react"
import { Link } from "gatsby"
import logo from "../images/icons/android-chrome-192x192.png"
import "./style.css"

const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <nav>
        <Link to="/">BIO</Link>
        <Link className="link-light" to="/artwork">ARTWORK</Link>
        <Link className="link-dark" to="/development">DEVELOPMENT</Link>
        <Link to="/contacts">CONTACTS</Link>
      </nav>
    </header>
  )
}

export default Header