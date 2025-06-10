import React from 'react'
import './header.css'
const Head = () => {
  return (
    <div>
      <section className='head'>
        <div className='container flexSB'>
            <div className='logo'>
                <h1>ACADEMIC</h1>
                <span>ONLINE EDUCATION & LEARNING</span>
            </div>
            <div className="social">
                <i className='fab fa-facebook icon' />
                <i className='fab fa-instagram icon' />
                 <i className='fab fa-twitter icon' />
                  <i className='fab fa-youtube icon' />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Head
