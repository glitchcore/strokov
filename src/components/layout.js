import React from "react"
import Header from "./header"
import "./style.css"

const Layout = ({ children, className }) => {
  return (
    <div className={`layout ${className}`}>
      <Header />
      <main>{children}</main>
      <footer>
        <p className="footer">truly yours // Andrew Strokov</p>
      </footer>
    </div>
  )
}

export default Layout
