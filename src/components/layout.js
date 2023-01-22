import React from "react"
import Header from "./header"
import "./style.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <footer>
        <p>Have a nice day!</p>
      </footer>
    </div>
  )
}

export default Layout
