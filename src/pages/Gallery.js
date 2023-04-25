import * as React from 'react'
import Layout from '../components/Layout'

const images = [
  { url: '/gallery/dalens-resort-sign.jpg', title: 'RAM Ram' },
  { url: '/gallery/dalens-resort-late-night-fishing.jpg',title: 'Kohaku River' },
  { url: '/gallery/dalens-resort-lakeside-view.jpg', title: 'Slurms MacKenzie' },
  { url: '/gallery/dalens-resort-totem-pole.jpg', title: 'Charizard' },
  { url: '/gallery/dalens-resort-decorated-pontoons.jpg', title: 'Mecha Ram' },
  { url: '/gallery/lake-chetac-treeline.jpg',title: 'Squirtle' },
  { url: '/gallery/dalens-resort-blossoming-tree.png',title: 'Wartortle' },
  { url: '/gallery/dalens-resort-docks.jpg',title: 'Blastoise' },
  { url: '/gallery/dalens-resort-boat-fishing.jpg',title: 'Oddish' },
]

const familyImages = [
  { url: '/gallery/family-1.jpg', title: 'RAM Ram' },
  { url: '/gallery/family-2.jpg', title: 'Kohaku River' },
  { url: '/gallery/family-3.jpg',title: 'Slurms MacKenzie' },
  { url: '/gallery/family-4.jpg',  title: 'Charizard' },
  { url: '/gallery/family-5.jpg', title: 'Mecha Ram' },
  { url: '/gallery/family-6.jpg',  title: 'Squirtle' },
  { url: '/gallery/family-7.jpg', title: 'Wartortle' },
  { url: '/gallery/family-8.jpg',  title: 'Blastoise' },
  { url: '/gallery/family-9.jpg', title: 'Oddish' },
]

// Define your component
const IndexPage = () => {
  return (
    <Layout> 



      
      <div className="container">
       <h1 className="main-content">Cabins and Views</h1>
        <div className="gallery-wrapper">
     

      <section className="segment">
        <div className="container">
          <div className="image-preview">
            {images.map((image) => {
              return (
                <div className="card" key={image.url}>
                  <a href={image.url} target="_blank" rel="noreferrer">

                    <div
                      className="image-thumbnail"
                      style={{ backgroundImage: `url('${image.url}')` }}
                      alt={image.title}
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      </div>

  
     

      <section className="segment">
        <div className="container">
          <div className="image-preview">
            {familyImages.map((image) => {
              return (
                <div className="card" key={image.url}>
                  <a href={image.url} target="_blank" rel="noreferrer">
                  

                    <div
                      className="image-thumbnail"
                      style={{ backgroundImage: `url('${image.url}')` }}
                      alt={image.title}
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      </div>

     
    </Layout>
  )
}

export default IndexPage 
