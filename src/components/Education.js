import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Education extends Component {
  render() {
    return (
      <section id="education" >
        <div className="container">
          <h2 className="title">Education</h2>
          <Row>
            <Col xs="12" md="6">
              <div className="edu-card">
                <p className="degree-title">MS in Computer Science</p>
                <p className="university">University of Texas at Airlington, United States</p>
                <p className="cgpa">CGPA 3.8/4.0</p>
                <p className="date">May 2017</p>
              </div>
            </Col>

            <Col xs="12" md="6">
              <div className="edu-card">
                <p className="degree-title">BE in Information Technology</p>
                <p className="university">University of Mumbai, India</p>
                <p className="cgpa">CGPA 3.8/4.0</p>
                <p className="date">June 2013</p>
              </div>
            </Col>
          </Row>
        </div>
      </section >
    )
  }
}

export default Education;
