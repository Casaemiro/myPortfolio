import React from 'react';
import introimg from "./intro-img.JPG";
const Introduction = () => {
    return (
        <div className="intro">
            <div className="intro-image">
                <img className='myimg' src={introimg} alt="My name is Silas" />
            </div>
            <div className="intro-text">
                <h1>Software Engineer</h1>
                <p className="intro-details">
                    I am a young <strong>smart</strong> and open minded individual
                    passionate about solving problems. I love
                    environments and scenarios that allow me to think
                    and solve problems. I’m also <strong>passionate</strong> about
                    teaching which I am excellent at and I find pleasure
                    in helping others understand. I don’t see myself as
                    the best engineer but I am always willing and ready
                    to learn.
                </p>
                <button className ="hireBtn">HIRE ME</button>
            </div>
        </div>
    );
}

export default Introduction;