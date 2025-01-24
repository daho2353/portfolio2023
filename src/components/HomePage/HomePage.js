import React, {useState} from 'react';
import profilePicture from '../../img/profile.png';
import phoneIcon from '../../img/phone.png';
import emailIcon from '../../img/email.png';
import gitIcon from '../../img/giticon.png';
import linkedInIcon from '../../img/linkedin.png';
import gitIconHoveredSrc from '../../img/giticondark.png';
import backgroundImage from '../../img/background.png';
import linkedInIconHoveredSrc from'../../img/linkedindark.png';
import './HomePage.css';

const HomePage = () => {
  const [gitIconHovered, setGitIconHovered] = useState(false);
  const [linkedInIconHovered, setLinkedInIconHovered] = useState(false);

  const handleGitIconHover = () => {
    setGitIconHovered(!gitIconHovered);
  };

  const handleLinkedInIconHover = () => {
    setLinkedInIconHovered(!linkedInIconHovered);
  };
  return (
    <div className='background-container'>
      <div className='page-background'></div>
      <img className="profile-picture" src={profilePicture} alt="profile picture"/>
      <div className="hero-container"> 
        <h2 className="hero-header"> Damian Howard </h2>
        <h3 className="hero-header"> Network/IT Technician, Content Creator, and Web Developer </h3>
      </div>
      <div className="homepage-container">
        <div className="about-me">
          <h3> About Me </h3>
          <p> My name is Damian and I am an aspiring technician and developer who graduated from the University of Colorado Boulder. I studied for a degree in Technology, Arts and Media with a minor in Computer Science. I have a passion for understanding and repairing network systems as well as many facets of content creation from web development to photo and video editing. I have a deep background in web development and graphic design along with a solid foundation of troubleshooting and customer service experiences.  I am committed to leveraging my technical knowledge and creative problem-solving abilities to ensure I am making a difference with whatever tehcnology I'm working with. </p>
        </div>
        <h4> Contact Me </h4>
        <div className="contact-information">
          <div className="phone-container">
            <img className="phone-icon" src ={phoneIcon} alt="phone icon"/>
            <p> 971-456-2595 </p>
          </div>
          <div className="email-container">
            <img className="email-icon" src ={emailIcon} alt="email icon"/>
            <p className="emails"> damian.howard1998@yahoo.com </p>
          </div>
          <div className="other-container">
            <div className="icon-container">
              <a href="https://github.com/daho2353" target="_blank">
              <img className="git-icon" src={gitIconHovered ? gitIconHoveredSrc : gitIcon} alt="git icon" onMouseEnter={handleGitIconHover} onMouseLeave={handleGitIconHover}/>
              </a>
              <a href="https://www.linkedin.com/in/damian-howard-801906174/" target="_blank">
              <img className="linked-in-icon" src={linkedInIconHovered ? linkedInIconHoveredSrc : linkedInIcon} alt="linked in icon" onMouseEnter={handleLinkedInIconHover} onMouseLeave={handleLinkedInIconHover}/>
              </a>
            </div>
          </div>
        </div>
    </div>
    </div>
    
  );
};

export default HomePage;
