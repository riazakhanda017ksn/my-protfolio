import React from 'react';

const AboutMeDetails = (props) => {
    const{name,about}=props.AboutMeDetail
    return (
        <div className='col-lg-6'>
            <div className="about-me">
                <h3>{name}</h3>
                 <p>{about}</p>
            </div>
        </div>
    );
};

export default AboutMeDetails;