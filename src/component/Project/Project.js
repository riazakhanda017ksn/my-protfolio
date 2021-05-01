import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './Project.css'
const Project = () => {
    return (
        <div className='my-project-section pb-4'>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="unrealistic">
                            <h2 className='project'>Here Is <span>My Projects</span></h2>
                           <div className="container">
                           <div className="row">
                                <div className="col-lg-8">
                                    <div className="doctor-portal-container">
                                    <div className="feature-of-the-project">
                                     <h4>Feature Of <span className='color'>The Project</span></h4>
                                      <div className="features-item">
                                      <ul>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Any user in this website can book a ticket to see a doctor
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          The user can view his booking list if he wants or he does not have access to the admin panel
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Users can give any review if they want
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Users can give any review if they want
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Language:(html, css, react JS, node, Express JS,MongoDB, firebase)
                                          </li>
                                          
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://github.com/riazakhanda017ksn/doctor-portal">Here The Code Link</a>
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://assingment-elevent.web.app/">Here The Live Site Link</a>
                                          </li>

                                      </ul>
                                </div>
                                </div>
                                </div>
                                </div>
                                <div className="col-lg-4"></div>
                            </div>
                           </div>
                        </div>
                    </div>
                
                    <div class="carousel-item  ">
                        <div className="photo">
                            <h2 className='project'>Here Is <span>My Projects</span></h2>
                            <div className="container">
                           <div className="row">
                                <div className="col-lg-12">
                                    <div className="doctor-portal-container">
                                    <div className="feature-of-the-project">
                                     <h4>Feature Of <span className='color'>The Project</span></h4>
                                      <div className="features-item">
                                      <ul>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Users can book any service if they want.

                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          After that the user will be taken to the login page, after leaving he will log in, after that he will be taken to the payment page.
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          After payment,the user can give service review if he wants and then the user can check his order status if he wants.
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          This website has an admin panel, admin which can only view admin page, user can only view his order and give feedback.
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Language:(html, css, react JS, node, Express JS,MongoDB, firebase)
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://github.com/riazakhanda017ksn/unrealistic-photography">Here The Client Code Link</a>
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://github.com/riazakhanda017ksn/unrealistic-photography-server">Here The Server Code Link</a>
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://true-log-in-form.web.app/">Here The Live Site Link</a>
                                          </li>

                                      </ul>
                                </div>
                                </div>
                                </div>
                                </div>
                              
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div className="your-it-shop">
                            <h2 className='project'>Here Is <span>My Projects</span></h2>
                            <div className="container">
                           <div className="row">
                                <div className="col-lg-12">
                                    <div className="doctor-portal-container">
                                    <div className="feature-of-the-project">
                                     <h4>Feature Of <span className='color'>The Project</span></h4>
                                      <div className="features-item">
                                      <ul>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Here any user can buy the product, after buying it will take him to the login page

                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          His order list will appear on the checkout page after log in, his order will be visible
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          If a user goes to the order page, he will be able to see his orders
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          If the admin wants, he can add any product and delete it again if he wants
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Language:(html, css, react JS, node, Express JS,mongoDb, firebase)
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://github.com/riazakhanda017ksn/Your-it-shop">Here The Client Code Link</a>
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://github.com/riazakhanda017ksn/your-it-shop-server">Here The Server Code Link</a>
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://your-it-shop.web.app/">Here The Live Site Link</a>
                                          </li>

                                      </ul>
                                </div>
                                </div>
                                </div>
                                </div>
                              
                            </div>
                           </div>

                        </div>
                    </div>
                    <div class="carousel-item ">

                        <div className="your-own-journey">
                            <h2 className='project'>Here Is <span>My Projects</span></h2>
                            <div className="container">
                           <div className="row">
                                <div className="col-lg-12">
                                    <div className="doctor-portal-container">
                                    <div className="feature-of-the-project">
                                     <h4>Feature Of <span className='color'>The Project</span></h4>
                                      <div className="features-item">
                                      <ul>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Here are three ways for a user to go anywhere

                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          After that it will take you to the login page

                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          He was then shown how much it cost to get somewhere

                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          This website is shown on Google Maps in which the user finds his destination
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Language:(HTML, CSS, React.js, Firebase-Authentication)
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://github.com/riazakhanda017ksn/your-own-journey">Here The Client Side Code Link</a>
                                          </li>
                                          
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://practice-recap-firebase.web.app/">Here The Live Site Link</a>
                                          </li>

                                      </ul>
                                </div>
                                </div>
                                </div>
                                </div>
                              
                            </div>
                           </div>

                        </div>

                    </div>
                    <div class="carousel-item ">

                        <div className="royal">
                            <h2 className='project'>Here Is <span>My Projects</span></h2>
                            <div className="container">
                           <div className="row">
                                <div className="col-lg-12">
                                    <div className="doctor-portal-container">
                                    <div className="feature-of-the-project">
                                     <h4>Feature Of <span className='color'>The Project</span></h4>
                                      <div className="features-item">
                                      <ul>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          In this website i just showed the banner in the homepage 

                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          And also added the team name and also i showed 15th card 

                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          added explore button, after clicking button it will show details 

                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          I also showed there logo and banner dynamically after all i showed description and social logo
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Language:(HTML, CSS, React.js,bootstrap)
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://github.com/riazakhanda017ksn/Royal-team">Here The Client Side Code Link</a>
                                          </li>
                                          
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://eager-spence-67b9bc.netlify.app/home">Here The Live Site Link</a>
                                          </li>

                                      </ul>
                                </div>
                                </div>
                                </div>
                                </div>
                              
                            </div>
                           </div>

                        </div>

                    </div>
                    <div class="carousel-item ">

                        <div className="finix">
                            <h2 className='project'>Here Is <span>My Projects</span></h2>
                            <div className="container">
                           <div className="row">
                                <div className="col-lg-12">
                                    <div className="doctor-portal-container">
                                    <div className="feature-of-the-project">
                                     <h4>Feature Of <span className='color'>The Project</span></h4>
                                      <div className="features-item">
                                      <ul>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          This website has just been designed

                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          No back-end work was done in it

                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Just designed a template from ThemeForest

                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Future will work on its back-end
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          Language:(HTML, CSS, bootstrap)
                                          </li>
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://github.com/riazakhanda017ksn/finix-template-by-riaz">Here The Client Side Code Link</a>
                                          </li>
                                          
                                          <li><span><FontAwesomeIcon icon={faCheck} /></span>
                                          <a href="https://riazakhanda017ksn.github.io/finix-template-by-riaz/?fbclid=IwAR2HV1rnLnhnbKpCU7ZXcbMCE9Ditl9CNNZQupwTmCi-H_MAHsr-M95fwao">Here The Live Site Link</a>
                                          </li>

                                      </ul>
                                </div>
                                </div>
                                </div>
                                </div>
                              
                            </div>
                           </div>

                        </div>

                    </div>


                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Project;