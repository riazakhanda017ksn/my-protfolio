import React, { useEffect } from 'react';
import './Resume.css'
import 'aos/dist/aos.css'
import Aos from 'aos';
import MySkill from '../MySkill/MySkill';
import OtherSkill from '../OtherSkill/OtherSkill';
const Resume = () => {
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    },[0])
    return (
        <div className="resume-background">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                      <div className="resume-main-part">
                           <div className="resume-caption  ">
                               <h1 className='text-center'>Here Is <span>My Resume</span></h1>
                               <div className="row" data-aos="fade-right">
                                   <div className="col-lg-6 ">
                                       <div className="education-part">
                                           <div className="education-heading">
                                               <h3><span>Education</span> </h3>
                                           </div>
                                           <div className="education-list-style text-left">
                                               <ul>
                                                   <li data-counter="1">
                                                       <h4>Study In <span> - In Dhaka</span> </h4>
                                                       <p>I read in Dhaka polytechnic institute at department at Computer.</p>

                                                   </li>
                                                   <li data-counter="2">
                                                       <h4> Programming Learning <span> - In Dhaka</span> </h4>
                                                       <p>i learnt javascript react.js node.js ,express.js from  programming hero.</p>

                                                   </li>
                                                   <li data-counter="3">
                                                       <h4> Artist of College <span> - In Dhaka</span> </h4>
                                                       <p>In my institute I was in the first place as a circuit artist</p>

                                                   </li>
                                               </ul>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col-lg-6 " >
                                   <div className="education-part">
                                           <div className="education-heading">
                                               <h3><span>Work Experiences</span> </h3>
                                           </div>
                                           <div className="education-list-style text-left">
                                               <ul>
                                                   <li data-counter="1">
                                                       <h4>Design  <span> - Of The Website</span> </h4>
                                                       <p> I look at any template that I can design according to that template with unique Design</p>

                                                   </li>
                                                   <li data-counter="2">
                                                       <h4> Development <span> - Of The Website</span> </h4>
                                                       <p>I know how to develop any website by using JavaScript React.js Node.js and Express.js</p>

                                                   </li>
                                                   <li data-counter="3">
                                                       <h4> Photography Experience <span> - Of Natural Photography</span> </h4>
                                                       <p>I have photography skills.i love mostly natural photography and also macro photography</p>

                                                   </li>
                                               </ul>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="row">
                                       
                                       <div className="col-lg-12 " data-aos="fade-right">
                                           <h2 className='text-center customize-caption'>Here Is My <span>Programming Skills</span></h2>
                                        <MySkill></MySkill>
                                       </div>
                                      <div className="row " data-aos="fade-right">
                                          <h2 className='other-skills pt-3 pb-5'>Here Is My <span>Other Skills</span> </h2>
                                          <OtherSkill></OtherSkill>
                                      </div>
                                   </div>
                               </div>
                            </div>  
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;