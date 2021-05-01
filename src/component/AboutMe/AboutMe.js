import React, { useEffect } from 'react';
import './AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import riaz2 from '../../images/riaz2.jpg'
import AboutMeDetails from '../AboutMeDetails/AboutMeDetails';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css'
import Aos from 'aos';
const aboutMe=[
  {
      name:'Education Skill',
      about:'Now  Im Studying Computer Engineering at Dhaka PolyTechnic Institute In Dhaka Bangladesh'
  },
  {
      name:'My Strategy',
      about:'I have Skills In html,css,bootstrap,javascript,reactJS, firebase Authentication, Express Js And also have in MongoDB'
  },
  {
    name:'Development Strategy',
    about:'I have Skills In html,css,bootstrap,javascript,reactJS, firebase Authentication, Express Js And also have in MongoDB'
},
{
    name:'My Quality',
    about:'I try to do everything with my mind and time so that the work is always good with best quality'
},
]
const AboutMe = () => {
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    },[0])
    return (
        <div className='background-need'>
        <div className="container padding">
            <div className="row">
                <div className="col-lg-5">
                    <div className="own-img">
                        <img src={riaz2} alt=""/>
                    </div>
                </div>
                <div className="col-lg-7">
                <div className="row px-5 " data-aos="fade-right">
                     <h6 className=' pt-5 about-text'>Read More <span className="readMore">About Me</span> </h6>
                    <h1 className="mt-4 pb-3 text-light">About <span className='color'>Me</span></h1>
                    <p className='text'>I am Riaz Ahmed. I live In Dhaka. My Hometown Is Cumilla, 
                    I’m working minimum of 13-14 hours every day, I love to do this it’s my <br/>
                    life-everything. I have  Introduce Myself In Below.

                    </p>
                    {
                        aboutMe.map(about=><AboutMeDetails AboutMeDetail={about}></AboutMeDetails>)
                            
                       
                        
                    }
                    <div className="download-my-cv">
                        <button>Download My Resume <FontAwesomeIcon icon={faDownload} /></button>
                    </div>
                      </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;