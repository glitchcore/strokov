import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const Page = () => {
  const photo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "main_photo.png" }) {
        childImageSharp {
          fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);


  return (
    <Layout>
      <div style={{textAlign:"right"}}>
        <span style={{marginLeft:"50%", background: "white"}}>Welcome to my page, i'm</span>
        <h1>Andrew Strokov</h1>
        <br/>
        <div style={{marginLeft:"30%"}}>
          <span style={{
            background: "white",
            lineHeight: 1.5,
            paddingTop: "0.2em",
            paddingBottom: "0.2em",
            paddingLeft: "0.5em"
          }}>
          I am an engineer, developer, and artist working at the intersection of technology and art.
          I strive to create solutions that are both thoughtful and user-friendly, designed to empower people
          to achieve their goals.
          As a developer, I am passionate about developing cutting-edge technology and making it accessible and 
          understandable for people. I specialize in creating interactive artwork, electronic devices and 
          web development. Thank you for visiting my website!</span>
        </div>
        <Img 
          style={{ 
            position: "absolute",
            bottom: 120,
            left: 75,
            width: "20%",
            objectFit: "cover",
            margin: "0em"
          }} 
          fluid={photo.placeholderImage.childImageSharp.fluid} 
        />
      </div>
    </Layout>
  )
}

export default Page