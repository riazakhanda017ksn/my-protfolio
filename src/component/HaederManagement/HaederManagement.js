import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Blog from '../Blog/Blog';
import MySkill from '../MySkill/MySkill';

import Navbar from '../Navbar/Navbar';
import Optional from '../Optional/Optional';
import Project from '../Project/Project';
import Resume from '../Resume/Resume';
import Services from '../Services/Services';

const HaederManagement = () => {
    return (
        <div>
           <div >
           <Navbar></Navbar>
           </div>
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <br/><br/><br/><br/><br/><br/><br/>
           <AboutMe></AboutMe>
            <Resume></Resume>
            <Project></Project>
            <Services></Services>
            <Blog></Blog>
            <Optional></Optional>
        </div>
    );
};

export default HaederManagement;