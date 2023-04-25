import React from 'react'
import { Link } from 'gatsby'
import weather from '../assets/dalens-resort-night.jpg'
import logo from '../assets/dalens-resort-logo.png'



const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org/', label: 'Gatsby' },
  { url: 'https://github.com/The-Busy-Bee', label: 'GitHub'},
  { url: 'https://www.netlify.com', label: 'Netlify'},
 
]


export const Footer = () => {
  return (
    <footer className="footer">
      <section>
     <div className='copyright' >  
     <nav>
        <div className="footer-wrapper">
        <div>
        <div className='footer-image'><img src={logo} alt="Photo of myself" /></div>
            </div>
            

            <div className='footer-contact'>
           
            <h2>Contact Information</h2>
            <p>


            Dalen’s Resort <br/>
            1764 N. County Road F<br/>
            Birchwood, WI 54817<br/>
            <br/>
            Phone: (715) 354-3570<br/>
            Toll Free: (888) 354-3570<br/>
            Email: Dalenslk@gmail.com<br/>
            </p>
            </div>
            
            <div >
           
          
            
            </div>
            </div>
     </nav>
      </div>
      <nav><span> Made by Kyle Fleishman</span></nav>
      </section>
    </footer>
  )
}