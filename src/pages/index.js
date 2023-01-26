import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { useImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"

import photo from "../images/main_photo.png"

import "./index.css"

const Page = () => {
  return (
    <Layout>
      <div className={"bio-container"}>
        <div className={"bio-left"}>
          <img class="bio-image" src={photo} alt="Your Image" />
        </div>
        <div className={"bio-right"}>
          <p>Welcome to my page, i'm</p>
          <h1>Andrew Strokov</h1>
          <p>
            I am an engineer, developer, and artist working at the intersection of technology and art.
            I strive to create solutions that are both thoughtful and user-friendly, designed to empower people
            to achieve their goals.
            As a developer, I am passionate about developing cutting-edge technology and making it accessible and 
            understandable for people. I specialize in creating interactive artwork, electronic devices and 
            web development. Thank you for visiting my website!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Page