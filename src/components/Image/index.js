import React from "react"
import {graphql, useStaticQuery} from "gatsby";

import {ImageContainer, ImageGrid, ImageH1, Image} from "./ImageElements";

const ImageGallery = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {
            extension: {
                regex: "/(jpg)|(png)|(jpeg)/"
                }, 
                name: {
                nin: ["background", "background2"]
                }
            }) {
    edges {
      node {
        base
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
    `)

    return(
        <ImageContainer>
            <ImageH1>View our Destinations</ImageH1>
            <ImageGrid>
                {data.allFile.edges.map((image, key ) => (
                    <Image key={key} fluid={image.node.childImageSharp.fluid} alt={image.node.base.split('.')[0]}/>
                ))}
            </ImageGrid>
        </ImageContainer>
    )
}

export default ImageGallery
