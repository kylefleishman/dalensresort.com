import * as React from 'react'
import Layout from '../components/Layout'




// Define your component
const IndexPage = () => {
  return (
    <Layout> 



      <div className="container">
        <div className="contact-wrapper">
    
            <div className='contactForm' >
              <h1>Contact Us</h1>
              <p>Fields marked with a <em>*</em> are required</p>
          <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Name: <em>*</em> <br/>  <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email: <em>*</em> <br/> <input type="email" name="email" /></label>
          </p>
        
          <p>
            <label>Message:<em>*</em>
            <br/>  <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>

            </div>
            
            <div className='contact-info'>
        <div className='google-maps'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.7145963947787!2d-91.52410918362115!3d45.696699279104514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ac671ea47186f9%3A0x67fd40c2008c8a58!2sDalen&#39;s%20Resort!5e0!3m2!1sen!2sus!4v1681157205407!5m2!1sen!2sus"   style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <h2>Contact Us</h2>
           <p>

            <strong>Address:</strong> 1764 N. County Road F<br/>
            Birchwood, WI 54817 <br/> <br/>
            <strong>Phone:</strong>(715) 354-3570<br/> <br/>
            <strong>Toll Free:</strong> (888) 354-3570<br/> <br/>
            <strong>Email:</strong> Dalenslk@gmail.com<br/> <br/>
            </p>
            </div>
            </div>
      </div> 
    </Layout>
  )
}

export default IndexPage 
