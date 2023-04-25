import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const BlogPostTemplate = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  let cabinImage = getImage(frontmatter.cabinImage?.childImageSharp?.gatsbyImageData)

  return (
    <Layout >
       
        <div className="container">
        <div className="cabin-wrapper4">
  <div>
  <div className="cabin-images"><GatsbyImage image={cabinImage}/></div>
  <div className="cabin-details">
        <h1>{frontmatter.cabinNumber}</h1>
        <ul>
                {frontmatter.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
        </div>
        </div>

        <div className="cabin-information">
          <h2>Cabin Information</h2>
          
          <p>3 Nights minimum.<br/>
              Summer nightly rates 15% of weekly rates.<br/>
              All Cabins on availability </p>
              
              <Link style={{ textDecoration: 'none' }}  to='https://availabilityonline.com/availtable.php?un=dalens'> <button>Check Availability</button> </Link>

        
          <h4>Check In & Check Out Times</h4>
          <p>Check In: 1:00 P.M<br/>
              Check Out: 9:00 A.M<br/> </p>
        </div>
            </div>
      </div> 


      <div className="container">
        <div className="cabin-wrapper3">
        <div>
          <h2>Summer Rates</h2>
          <div className="rate-details">
          <ul>
                  <li>2 People $890</li>
                  <li>3 People $925</li>
                  <li>4 People $960</li>
                  <li>5 People $995</li>
                  
              </ul>
              </div>
        </div>

        <div>
          <h2>Spring & Fall Rates</h2>
          <div className="rate-details">
          <ul>
                
                  <li>2 People $780</li>
                  <li>3 People $815</li>
                  <li>4 People $850</li>
                  <li>5 People $885</li>
                  
              
              </ul>
              </div>
        </div>
            </div>
      </div> 

      <div className="container">
        <div className="cabin-wrapper3">
        <div>
          <h2>Cabins include:</h2>
          <div className="cabin-details">
        <p> • Two and three bedrooms<br/>
            • Fully equipped kitchens<br/>
            • Living rooms with cable TV<br/>
            • Bathrooms with shower <br/>(bath & beach towels not included)<br/>
            • Screened-in porch with swing<br/>
            • Cabins are air conditioned<br/><br/>
            Cribs and highchairs available upon request</p>
              </div>
        </div>

        <div>
          <h2>Reservations:</h2>
          <div className="cabin-details">
          <p>Reservation deposit required by January 15, or after January 15 within seven days of your reservation request. 
          Reservation deposit 100% refundable if cancellation is made by March 1st,or if we are able to fill the vacanancy. <br/><br/>
          Sorry, no refunds for early departures.</p>
              </div>
        </div>
            </div>
      </div> 

      <div className="container">
        <div className="cabin-wrapper3">
        <div>
          <h2>Additional Amenities:</h2>
          <div className="cabin-details">
         <p> • One boat in our covered dock. <br/>
          • Enjoy free use of kayaks and canoe.<br/>
          • Gas oil, and electric motors all available from at the dock.<br/>
          • Free pier dockage or covered dockage rental available for personal boats.<br/>
          • Modern fish cleaning house to clean your catch and free freezer space<br/>
          to store them until your departure.<br/>
          • For the safety and comfort of our guests, we do not allow pets.<br/>
          *Additional boats, motors, and pontoons available for rent.<br/>
          *Free pier dockage for personal boats<br/>
          *Live bait available for purchase.<br/></p>
              </div>
        </div>
            </div>
      </div> 
    </Layout>
  )
}


export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  
  ) {
    
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        cabinNumber
        amenities
        cabinImage {
          childImageSharp {
            gatsbyImageData (width: 400)
          }
        }
      }
    }
  }
`
