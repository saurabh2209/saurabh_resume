import React, { Component } from 'react';
import { Row, Col, Badge } from 'reactstrap';

const DATA = {
  tools: [
    "Android Studio", "Eclipse", "Sublime", "Cloud9", "Git",
    "Teradata SQL Assistant", "Apache Tomcat", "MS Office",
    "Heroku", "AWS"
  ],
  databases: ["SQL", "MongoDB", "Teradata"],
  languages: ["Java", "SQL"],
  web: [
    "Javascript", "es5", "es6", "JQuery", "React JS", "Webpack", "Redux",
    "Node JS", "Express JS", "EJS", "AJAX", "JSON", "HTML5", "CSS3", "Bootstap", "SAAS"
  ],
  os: "windows",
  testing: "jest"
};



class Skills extends Component {
  render() {
    return (
      <section id="skills" >
        <div className="container">
          <h2 className="title">Skills</h2>
          <Row>
            <Col xs="12">
              <div className="skill-wrap">
                <p className="heading">Tools:</p>
                {
                  DATA.tools.map((val, id) => {
                    return <Badge key={id} className="badge">{val}</Badge>
                  })
                }
              </div>
            </Col>

            <Col xs="12">
              <div className="skill-wrap">
                <p className="heading">Languages:</p>
                {
                  DATA.languages.map((val, id) => {
                    return <Badge key={id} className="badge">{val}</Badge>
                  })
                }
              </div>
            </Col>

            <Col xs="12">
              <div className="skill-wrap">
                <p className="heading">Databases:</p>
                {
                  DATA.databases.map((val, id) => {
                    return <Badge key={id} className="badge">{val}</Badge>
                  })
                }
              </div>
            </Col>


            <Col xs="12">
              <div className="skill-wrap">
                <p className="heading">Web Technologies:</p>
                {
                  DATA.web.map((val, id) => {
                    return <Badge key={id} className="badge">{val}</Badge>
                  })
                }
              </div>
            </Col>

            <Col xs="12">
              <div className="skill-wrap">
                <p className="heading">Operating Systems:</p>
                <Badge className="badge">{DATA.os}</Badge>
              </div>
            </Col>

            <Col xs="12">
              <div className="skill-wrap">
                <p className="heading">Testing:</p>
                <Badge className="badge">{DATA.testing}</Badge>
              </div>
            </Col>
          </Row>
        </div>
      </section >
    )
  }
}

export default Skills;
