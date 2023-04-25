 
import * as React from 'react'
import Layout from '../components/Layout'
import kayaks from '../assets/dalens-resort-family-kayaking.jpg'
import pontoons from '../assets/dalens-resort-decorated-pontoons.jpg'
import rentals from '../assets/dalens-resort-pontoons-and-boat.jpg'

// Define your component
const IndexPage = () => {
  return (
    <Layout> 
      <div className="container">
       <h1 className="main-content">Marine Rentals</h1>
        <div className="project-wrapper">
        <div>
        <div className='content-image'><img src={pontoons} alt="Photo of two pontoons on Big Lake Chetac" /></div>
        <h2>PONTOON RENTAL</h2>
           <p>Our pontoons are modern and fully equipped for fishing trips, going out for a swim, or just taking a cruise along the lake! All complete with 28hp motors, swim ladder, and anchor.</p>
            </div>
            

            <div >
            <div className='content-image'><img src={kayaks} alt="Photo of father and son kayaking" /></div>
            <h2>RECREATION</h2>
            <p>Boat Landing on location. <br/><br/>

            Complimentary use of kayaks, stand-up paddle boards, and canoe for cabin guests.<br/><br/>

            Lakeside lighting with electric to recharge your boat batteries.<br/><br/>

            Modern fish cleaning house for your end of the day catches!<br/><br/>

            Complimentary use of life jackets with boat or pontoon rental.</p>
            </div>
            
            <div >
            <div className='content-image'><img src={rentals} alt="Photo of boats and pontoons docked at Dalen's Resort" /></div>
            <h2>BOAT RENTALS</h2>
            <p>Cottage rental includes one reserved dock space. </p>
            </div>
            </div>
      </div> 
    </Layout>
  )
}

export default IndexPage 
