import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { Hero } from '../components/Hero'
import content2 from '../assets/dalens-resort-docks.jpg'
import content from '../assets/dalens-resort-decorated-pontoons.jpg'
import floppy from '../assets/blue-potion.png'
import { Testimonials } from '../components/Testimonials';


// Define your component
const mainNavItems = [
  { url: '/cabins', icon: floppy, label: 'Cabins' },
  { url: '/marineRentals', icon: floppy, label: 'Marine Rentals' },
  { url: '/Gallery', icon: floppy, label: 'Gallery' },
  { url: '/Contact', icon: floppy, label: 'Contact' },
]


const IndexPage = () => {
  return (
    <Layout> 
    <div className="heroImage">
     
   
    
     
     


      <div className="absolute-container">
     

        <div className="hero-wrapper">
          <Hero  index> <h1> Welcome to Dalen's Resort </h1>
            <p className="subtitle">
            Enjoy staying at Dalen’s Resort in one of our nine clean and comfortable lakeside northwoods Cottage & Cabin Rentals. Dalen's Resort, located in the Bluegill Capital of Wisconsin, is a wonderful retreat for family and fishing vacations. Big Chetac Lake offers great fishing for walleye pike, northern pike, largemouth bass, smallmouth bass, crappies, and perch, as well as the beautiful views that Lake Chetac has to offer. 
            </p>
            <Link style={{ textDecoration: 'none' }}  to='https://availabilityonline.com/availtable.php?un=dalens'><button>Check Availability</button></Link>
          </Hero>
         
        </div>
      </div>
      </div>


<div className='indexNav'>
      <div className="container">
     
        <div className="list-wrapper">
          <div className="list-item">
          <Link style={{ textDecoration: 'none' }} to="/Gallery"> <div className='content-image'><div className='gallery-image'></div></div></Link>
            <p >
            View photos of our exclusive lakeside cabins and the beautiful scenery that Big Lake Chetac has to offer.<br />
            </p>
            <Link style={{ textDecoration: 'none' }} to="/Gallery"><button>View Gallery</button></Link>
            </div>
            <div className="list-item">
            <Link style={{ textDecoration: 'none' }} to="/cabins"> <div className='content-image'><div className='cabin-image'></div></div></Link>
            <p >
            View photos of our exclusive home style cabins and our cabin information and policies.<br />
            </p>
            <Link style={{ textDecoration: 'none' }} to="/cabins"><button>View Cabins</button></Link>
            </div>

            <div className="list-item">
            <Link style={{ textDecoration: 'none' }} to="/Contact"> <div className='content-image'><div className='contact-image'></div></div></Link>
            <p >
            Questions or concerns? Give us a call at (888) 354-3570, or email us at dalenslk@gmail.com.<br />
            </p>
            <Link style={{ textDecoration: 'none' }} to="/Contact"><button>Contact Us</button></Link> 
            </div>
        </div>
        <p className="subtitle">
               <h3>Bait now available for purchase at the Resort!</h3>
               Please see the front desk for more information.</p>
      </div>
      </div>

    <Testimonials/>
  
    <div>
    <div className="container">
        <div className="contact-wrapper">
          <div className='contact'> <h1> Relax at Dalen’s Resort</h1>
            <p className="subtitle">
            Dalen’s Resort is your spot for cabin, boat, and motor rentals. The resort is located on Big Chetac, a 1,920-acre lake surrounded by  attractions such as the famous Tuscobia Trail, excellent restaurants, golf, tennis, horseback riding, and many other nearby lakes. Spend the day fishing for bluegill  walleye, and northern bass. Feel free to take advantage of our free kayaks, and canoe; as well as free pier dockage for personal boats.
            </p>
          </div>

        </div>
      </div>

      <div className="container">
        
        <div className="content-wrapper">
        
          
          <p className="subtitle">
          After a long day of fishing retire to our fish cleaning houses; which our guests tell us are the best in the area! Make sure to take advantage of our beautiful grounds. Relax in comfort with our lawn chairs, picnic tables, campfire pits, and Weber grills. Don’t forget to catch some shade under one of our many large trees. Children can enjoy our playground which includes swings and a sandbox.
            </p>
          
         
          <div>
          </div>
          <div className='hero-image'><img src={content} alt="Photo of two pontoons on Big Lake Chetac" /></div>
        </div>

        <div className="hero-wrapper">
        <div className='hero-image'><img src={content2} alt="Photo of the docks at Dalen's Resort" /></div>
        
          <p className="subtitle">
          Each cottage rental includes one boat in our covered dock. Additional boats and motors are available for rent. Gas and oil are available directly from the dock. Free pier dockage or covered rental dockage available for personal boats. Electric is located at each dock.
            </p>
         
         
          <div>
          </div>
        </div>
        </div>
    
        </div>
    </Layout>
  )
}

export default IndexPage








