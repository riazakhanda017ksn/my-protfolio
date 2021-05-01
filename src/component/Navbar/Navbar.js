import React, { useState } from 'react';
import './Navbar.css'
import video1 from '../../video/pexels-pavel-danilyuk-5495898.mp4'
import video2 from '../../video/pexels-hugo-butery-7272375.mp4'
import img from '../../images/riaz.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical'


const Navbar = () => {
    const [navbar,setNavbar]=useState(false)
    const changeBackground=()=>{
      if(window.scrollY >170){
          setNavbar(true)
      }else{
          setNavbar(false)
      }
    }
    window.addEventListener('scroll',changeBackground)
    return (
       <section>
        <nav class={navbar ? "navbar navbar-expand-lg navbar-light fixed-top navBg" : "navbar navbar-expand-lg navbar-light fixed-top "} >
            <div class="container">
              <div className="logo">
              <h4><span className='mr-3'><FontAwesomeIcon icon={faRegistered} /></span>iaZ</h4>
              </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav  menual-customize">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>
        
        <div className="video-section">
        <video src={video1} muted loop autoPlay></video>
        <div className="video-overly"></div>
        <div className="text container mt-5 animate__animated animate__fadeInLeft">
       <div className="need-padding " >
       <h5 className='pt-5'>Welcome To My World</h5>
         <h1 >I'm <span>Riaz</span></h1>
         <h1 className='customize'> I'm <span className='ml-4 text-light'> A </span>
              <Typical
        loop={Infinity }
        steps={[ 
          'Web Developer', 2000,1000,
          'Web Designer', 2000,1000,
          'React JS Developer', 2000,1000,
          'Javascript Developer', 2000,1000
        ]}
        wrapper="b"
      />
         </h1>
         <p>Web Desing & Development is my passion ,  Always I Do Hard Work To Make it Success <br/>
         I Always Try To Make  Something Better Than Others.
         </p>
         <div className="social-icon d-flex">
          <p>Visit My Social Media -
         

            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href=""><FontAwesomeIcon icon={faGithub} /></a>
            
          </p>
       </div>
         </div>
        </div>

        </div>
      
      </section>
    );
};

export default Navbar;