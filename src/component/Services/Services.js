import React from 'react';
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd, faClipboardCheck, faCode, faLaptopCode, faLightbulb, faMoneyBill, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import { faCreativeCommons, faServicestack } from '@fortawesome/free-brands-svg-icons';
import 'aos/dist/aos.css'
import Aos from 'aos';
const Services = () => {
    return (
        <div className='services-part'>
            <h1 className='text-center text-light'>
                My <span className='color'>Services</span>
            </h1>
            <div className="container " data-aos="fade-right">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="service-container">
                            <div className="service-logo">
                                <span><FontAwesomeIcon icon={faLightbulb} /></span>
                            </div>
                            <div className="service-section">

                                <h5>Creative Web Design</h5>
                                <p>Web design is a similar process of creation, with the intention of presenting. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, praesentium. Eos numquam vero maxime illo harum nisi!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-container">
                            <div className="service-logo">
                                <span><FontAwesomeIcon icon={faCode} /></span>
                            </div>
                            <div className="service-section">

                                <h5>Web Development</h5>
                                <p>The website is built by web language that’s why we need to code for every website. it’s very important to have hand coding, clean and developer friendly coding. I give 100% guarantee in all of them.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-container">
                            <div className="service-logo">
                                <span><FontAwesomeIcon icon={faMoneyBill} /></span>
                            </div>
                            <div className="service-section">

                                <h5>Website Payment</h5>
                                <p>
                                    Online store & shopping
                                I can create a fully functional online store with  payment gateway.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quas eaque eveniet! 
                                
                                
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-container">
                            <div className="service-logo">
                                <span><FontAwesomeIcon icon={faServicestack} /></span>
                            </div>
                            <div className="service-section">

                                <h5>Brand Identity</h5>
                                <p>Web design is a similar process of creation,
                                with the intention of presenting.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quis soluta fugit magni corporis aliquid ratione facere.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-container">
                            <div className="service-logo">
                                <span><FontAwesomeIcon icon={faAd} /></span>
                            </div>
                            <div className="service-section">

                                <h5>Adobe Photoshop</h5>
                                <p>Web design is a similar process of creation,
                                with the intention of presenting.For this we need .Photoshop has a lot of role to play in making the pictures of the website beautiful.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-container">
                            <div className="service-logo">
                                <span><FontAwesomeIcon icon={faClipboardCheck} /></span>
                            </div>
                            <div className="service-section">

                                <h5>Website Is Ready!</h5>
                                <p>After reviewing everything, we are going to the final step, if everything has done, then I can publish it for everyone. In every project, i make sure to give full support to the clients...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;