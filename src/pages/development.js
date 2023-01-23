import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Page = () => {
  return (
    <Layout className="layout-dark">
      <h1>My Development Work</h1>
      <p>I am a developer and I specialize in [insert your programming languages/frameworks].</p>
      <p>You can view my GitHub <a href="[insert your GitHub link]">here</a>.</p>
    </Layout>
  )
}

export default Page