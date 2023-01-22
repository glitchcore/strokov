import React from "react"
import { Link } from "gatsby"
import logo from "../images/icons/android-chrome-192x192.png"
import "./style.css"

const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <nav>
        <Link to="/">Bio</Link>
        <Link to="/artwork">Artwork</Link>
        <Link to="/development">Development</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </header>
  )
}

export default Header