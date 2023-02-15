import React from 'react';
import "./About.css";

const About = () => {
  return (
    <section className='about'>
        <div className='container'>
            <div className='section-title'>
                <h2>About</h2>
            </div>
            <div className='about-content grid'>
                <div className='about-img'>
                    <img src='' alt='book-image'/>
                </div>
                <div className='about-text'>
                    <h2 className='about-title'>About Book Stop</h2>
                    <p className=''>
                        This book stop is basically a website where the seniors of college can give their book to their juniors. It will be helpful for both the people juniors as well as seniors.
                    </p>
                </div>
                
                    
                
            </div>
        </div>
      
    </section>
  )
}

export default About
