import React from 'react'
import { Link } from 'gatsby'
import floppyLogo from '../assets/dalens-resort-logo.png'
import floppy from '../assets/blue-potion.png'

//import projects from '../assets/blue-potion.png'
import { slugify } from '../utils/helpers'


const mainNavItems = [
  { url: '/cabins', icon: floppy, label: 'Cabins' },
  { url: '/marineRentals', icon: floppy, label: 'Marine Rentals' },
  { url: '/Gallery', icon: floppy, label: 'Gallery' },
  { url: '/Contact', icon: floppy, label: 'Contact' },
]



export const Navigation = ({ }) => {
  return (
    <section className="navigation">
      <div className="container">
    
        <nav>
       
          <Link to="/" className="item brand">
            <img src={floppyLogo} className="logo" alt="Dalen's Resort" />
            <span>Dalen's Resort</span>
          </Link>
          {mainNavItems.map((item) => (
            <div className="nav-item-outer">
             
              <Link
                to={item.url}
                key={item.label}
                activeClassName="active"
                className={`item ${slugify(item.label)}`}
              >
                <span>{item.label}</span>
              </Link>
            </div>
          ))}

        </nav>
     
      </div>
    </section>
  )
}