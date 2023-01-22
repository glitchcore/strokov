import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Page = () => {
  return (
    <Layout>
      <h1>My Artwork</h1>
      <p>I am an artist and I specialize in [insert your medium/style].</p>
      <p>You can view my portfolio <a href="[insert your portfolio link]">here</a>.</p>
    </Layout>
  )
}

export default Page