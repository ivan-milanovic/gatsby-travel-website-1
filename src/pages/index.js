import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection";
import ImageGallery from "../components/Image";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <HeroSection/>
      <ImageGallery/>
  </Layout>
)

export default IndexPage
