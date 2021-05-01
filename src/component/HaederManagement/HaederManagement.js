import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import MySkill from '../MySkill/MySkill';

import Navbar from '../Navbar/Navbar';
import Progessbar from '../Progressbar/Progessbar';
import Project from '../Project/Project';
import Resume from '../Resume/Resume';

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
            <Progessbar></Progessbar>
        </div>
    );
};

export default HaederManagement;