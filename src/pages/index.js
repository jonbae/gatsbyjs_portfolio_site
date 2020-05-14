import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/styles.scss"
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
  </div>
)

export default IndexPage
