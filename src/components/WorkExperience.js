import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class WorkExperience extends Component {
  render() {
    return (
      <section id="work_experience" >
        <div className="container">
          <h2 className="title">Work Experience</h2>
          <Row>
            <Col xs="12" md="6">
              <div className="work-card">
                <div className="work_card_title_wrap">
                  <p className="work_card_title">NEU ROBOTICS Inc (May 2017 – September 2017)</p>
                  <p className="work_card_title">Intern (React JS Developer)</p>
                </div>
                <ul className="work_list">
                  <li>Participated in project planning sessions with business analyst and team members to analyze business IT requirements and translate business requirements into working model</li>
                  <li>Broken down the application into different React presentational components</li>
                  <li>Developed Single Page application using React JS for better rendering performance</li>
                  <li>Used Webpack as a module bundler to bundle all the dependencies needed to run the application</li>
                  <li>Used Passport strategies like Passport Local and JSON Web tokens to authenticate the users and to check the validity of web tokens</li>
                </ul>
              </div>
            </Col>

            <Col xs="12" md="6">
              <div className="work-card">
                <div className="work_card_title_wrap">
                  <p className="work_card_title">Atos India Pvt. Ltd.  (October 2013 – March 2015)</p>
                  <p className="work_card_title">Jr JavaScript Developer</p>
                </div>
                <ul className="work_list">
                  <li>Training in gathering user requirements and followed by analysis and design</li>
                  <li>Designed web pages using with HTML, CSS, JavaScript and AJAX </li>
                  <li>Used HTML to structure the web page layout</li>
                  <li>Used CSS and CSS pre-processors for styling web pages</li>
                  <li>Used JavaScript to manipulate and add behavior to the DOM Elements</li>
                  <li>Configured application on Apache Tomcat application server</li>
                  <li>Used MySQL Database to store data</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </section >
    )
  }
}

export default WorkExperience;
