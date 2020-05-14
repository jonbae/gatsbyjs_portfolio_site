import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      astro: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      moe: file(relativePath: { eq: "moe_kamina_glasses.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kamina: file(relativePath: { eq: "gurren_lagann_glasses.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img fluid={data.moe.childImageSharp.fluid} />
          </div>
          <div className="main-text">Oladime</div>
          <div className="main-image">
            <Img fluid={data.kamina.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.astro.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
        <div className="fixed-misc">Visual Artist and Photographer</div>
      </div>
    </div>
  )
}

export default Banner
