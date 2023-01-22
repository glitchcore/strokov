import React from "react"
import Header from "./header"
import "./style.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <footer>
        <p className="footer">truly yours // Andrew Strokov</p>
      </footer>
    </div>
  )
}

export default Layout
