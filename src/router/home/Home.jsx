import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="about">
          <div className="about-page">
            <div className="our-team">
            <span className='about-text1'>Our Team</span>
          </div><br />
          <span className='about-text2'>Meet Our Expert Doctors</span><br />
          <span className='about-text3'>Our team of highly qualified and experienced medical professionals is  <br /> providing the best care for our patients.</span>
        </div>
      <div className="about-profil">

        <div className="about-img1">
          <div className="about-page-img1"></div><br />
          <div className="about-text-page">
            <span className='about-text4'>Dr. Dilshod Rahimov</span><br />
            <span className='about-text5'>Cardiologist</span><br />
            <span className='about-text6'>MD, Tashkent Medical Academy</span><br />
            <span className='about-text7'>15 years of experience</span><br />
            <button className='about-btn'>Wiev Profile</button>
          </div>
        </div>

        <div className="about-img2">
          <div className="about-page-img2"></div><br />
          <div className="about-text-page">
            <span className='about-text4'>Dr. Nilufar Karimova</span><br />
            <span className='about-text5'>Pediatrician</span><br />
            <span className='about-text6'>MD, Pediatrics, Moscow Medical University</span><br />
            <span className='about-text7'>12 years of experience</span><br />
            <button className='about-btn'>Wiev Profile</button>
          </div>
        </div>

        <div className="about-img3">
          <div className="about-page-img3"></div><br />
          <div className="about-text-page">
            <span className='about-text4'>Dr. Jasur Toshmatov</span><br />
            <span className='about-text5'>Neurologist</span><br />
            <span className='about-text6'>MD, Neurology, International Medical Institute</span><br />
            <span className='about-text7'>18 years of experience</span><br />
            <button className='about-btn'>Wiev Profile</button>
          </div>
        </div>

      </div>
      </div>

    </div>
  )
}

export default Home