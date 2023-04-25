import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
       
        <p>
         Error
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
     
     
     <div className="container">
      <h1 className="main-content">Cabins</h1>
      <div className="cabin-wrapper2">
      <div className="cabin-images">
        {posts.map(post => {
          let cabinImage = getImage(post.frontmatter.cabinImage?.childImageSharp?.gatsbyImageData)
          const title = post.frontmatter.title || post.fields.slug

          return (
            <div key={post.frontmatter.slug} className="cabin-wrapper">
  
            <div className="cabin-images">
            <Link to={post.fields.slug}>   <div className="cabin-images"><GatsbyImage image={cabinImage}/></div> </Link>
            </div>
            <div className="cabin-details">
            <Link style={{ textDecoration: 'none' }} to={post.fields.slug}>
              <button>{post.frontmatter.title}</button>
              </Link>
              <ul>
                {post.frontmatter.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
          </div>
                  )
                })}
             
              </div>
              </div>

        </div>
    


    </Layout>
  )
}

export default BlogIndex




export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: {cabinNumber: ASC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          cabinNumber
        
          amenities
          cabinImage {
            childImageSharp {
              gatsbyImageData (height: 300 width:300)
            }
          }
          description
        }
      }
    }
  }
`
