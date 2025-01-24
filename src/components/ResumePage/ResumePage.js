import React from 'react';
import './ResumePage.css'
import EducationTile from '../EducationTile/EducationTile';
import SkillsTile from '../SkillsTile/SkillsTile';
import pdfIcon from '../../img/pdf.png';
import docxIcon from '../../img/docx.png';

const ResumePage = () => {
  return (
    <div className="resume-background">
      <div className="resume-container">
      <h2 className="resume-header"> Resume </h2>
      <div className="resume-icon-container">
        <a href={require('../../img/resumewebdev.pdf')} download><img src={pdfIcon} className='pdf-icon'/></a>
        <p className="icon-caption"> web dev </p>
        <a href={require('../../img/resumenetworking.pdf')} download><img src={pdfIcon} className='pdf-icon'/></a>
        <p className="icon-caption"> networking </p>
        <a href={require('../../img/resume.docx')} download><img src={docxIcon} className='docx-icon'/></a>
        <p className="icon-caption"> networking (docx) </p>
      </div>
        <div className='education-skills-container'>
          <div className='education-component'>
            <h2 className="resume-header"> Education </h2>
            <EducationTile />
          </div>
        </div>
        <h2 className="resume-header" id="skills-header"> Skills </h2>
        <div className='skills-component'> 
            <div className="skills-column-1">
              <ul>
                <li> Cisco, Juniper, Ciena, Nokia </li>
                <li> OTDR, RFC, and Loop Testing </li>
                <li> Fortinet </li>
                <li> Layer 1, IP & Ethernet, Transport & Fiber </li>
                <li> Root Cause Analysis </li>
              </ul> 
            </div>
            <div className="skills-column-2">
            <ul>
                <li> Graphic Design, Video Editing</li>
                <li> ReactJS, Typescript, HTML/CSS  </li>
                <li> Python, C++, C#  </li>
                <li> SQL, Firebase </li>
                <li> Figma, SASS/LESS, npm, git </li>
              </ul> 
            </div>
            <div className="skills-column-3">
            <ul>
                <li> Remote Troubleshooting </li>
                <li> Helpdesk Administration </li>
                <li> Agile/Scrum Methodolgy</li>
                <li> Customer Service </li>
                <li> Microsoft Office Experienced </li>
              </ul> 
            </div>
        </div>
        <div className="experience-container">
          <div className="work-container">
            <h2 className='resume-header'> Work Experience </h2>
            <ul>
              <li className='bolded'> United States Postal Service - PSE Clerk </li>
              <li className='italics'> Scappoose, Oregon Jan 2024 - Current </li>
              <li> Opened the store each morning without supervision and enhanced customer satisfaction by efficiently sorting, routing, and distributing 1000’s of pieces of mail to appropriate P.O. boxes and route stations within the post office each day.</li>
              <li className='bolded'> Zayo - Network Technician II & III</li>
              <li className='italics'> Remote (Denver, CO) Oct 2021 - Dec 2022 </li>
              <li> Improved network reliability for fortune 500 companies by diagnosing, repairing, and analyzing problems within the Zayo network. Repaired numerous IP and Fiber issues on the fly daily in a fast paced work environment. Worked directly with customers and technicians in a remote ticket environment. </li>
              <li className='bolded'> GTT - Network Analyst </li>
              <li className='italics'> Remote (Denver, CO) Nov 2020 - Oct 2021 </li>
              <li> Received inbound calls from customers reporting issues within GTT network. Resolved various connectivity issues for end-users through layer 1 troubleshooting or escalating the issue for outages and equipment failures. </li>
              <li className='bolded'> CU Boulder, Office of Information Technology, Distance Learning Services - Student Manager</li>
              <li className='italics'> Boulder, Colorado July 2018 - Apr 2020</li>
              <li> Scheduled, monitored, and performed troubleshooting for recorded lectures all over campus. Trained the other student assistants and managed their schedules. Performed hardware and software installations and completed coding projects.
              </li>
              <li className='bolded'> Good Times, Ross, World Market - General Staff </li>
              <li className='italics'> Colorado Sept 2015 - July 2018 </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
