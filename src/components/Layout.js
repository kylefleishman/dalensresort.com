//layouts are what groups all of the components
//into one individual page for gatsby

import React, { useState } from 'react'
import { useLocation } from '@reach/router'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import Helmet from 'react-helmet'
import { SEO } from '../components/SEO'
import config from '../utils/config'

import '../style.css'



export const Layout = ({ children }) => {
  const location = useLocation()
  const [theme, setTheme] = useState('dark')
  const [collapsed, setCollapsed] = useState(false)
  const slug = location.pathname

  
  return (
    <div>
  
   
    <div id="layout" className="layout">
    <Helmet title={config.siteTitle} />
      <SEO />
      
    {(<Navigation 
      theme={theme} /> )}
    {children}
    
    <Footer />
    </div>
    </div>
  )
}
export default Layout