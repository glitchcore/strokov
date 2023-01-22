import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Page = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
        <p>Email: [insert your email]</p>
        <p>Phone: [insert your phone number]</p>
        <p>Social media: <a href="[insert your social media links]">[insert your social media handles]</a></p>
        <p>You can also find me on <a href="[insert your LinkedIn link]">LinkedIn</a>.</p>
    </Layout>
  )
}

export default Page