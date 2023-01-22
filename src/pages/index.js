import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Page = () => {
  return (
    <Layout>
      <h1>Welcome to my Bio page</h1>
      <p>This is where you can learn more about me.</p>
      <Link to="/artwork">View my artwork</Link>
      <Link to="/development">View my development work</Link>
      <Link to="/contacts">Contact me</Link>
    </Layout>
  )
}

export default Page