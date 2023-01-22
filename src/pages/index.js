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
        <p>Welcome to my page, i'm</p>
        <h1>Andrew Strokov</h1>
        <p>This is where you can learn more about me.</p>
        <Img 
          style={{ 
            position: "absolute",
            bottom: 41,
            left: 0,
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