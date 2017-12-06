import React, { Component } from 'react';
import {
  Row, Col, Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <div className="container">
          <h2 className="title">Projects</h2>
          <Row>
            <Col xs="12" md="6">
              <Card className="project_card">
                <CardBody>
                  <CardTitle className="project_card_title">Quiz Application using React JS</CardTitle>

                  <CardSubtitle>
                    <div className="project_env">
                      <span>Environment-</span>React JS, ES6, Webpack, CSS, Git
                    </div>
                  </CardSubtitle>

                  <CardText>
                    Developer ‘Quiz Application’ a single page application using React JS where a user is taken through a series of multiple choice Questions and assessed based on the options chosen
                  </CardText>

                  <CardText>
                    User can navigate back and forth and can change their choices
                 </CardText>

                  <CardSubtitle className="project_env">
                    <span>Website Link: </span>
                    <a href="https://shrouded-anchorage-66986.herokuapp.com/">https://shrouded-anchorage-66986.herokuapp.com/</a>
                  </CardSubtitle>

                  <CardSubtitle>
                    <span>Github Link: </span>
                    <a href="https://github.com/saurabh2209/-Quiz-using-React-JS">https://github.com/saurabh2209/-Quiz-using-React-JS</a>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>


            <Col xs="12" md="6">
              <Card className="project_card">
                <CardBody>
                  <CardTitle className="project_card_title">Recipe Finder Application using Redux</CardTitle>

                  <CardSubtitle>
                    <div className="project_env">
                      <span>Environment-</span>React JS, Redux, ES6, Bootstrap, Git
                    </div>
                  </CardSubtitle>

                  <CardText>
                    Developed ‘Recipe Finder Application’ a single page application using React JS and Redux that allows user to find recipes based on the ingredients entered

                  </CardText>

                  <CardText>
                    Used Redux to maintain state of the application
                 </CardText>

                  <CardSubtitle>
                    <span>Github Link: </span>
                    <a href="https://github.com/saurabh2209/Recipe-Finder">https://github.com/saurabh2209/Recipe-Finder</a>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </section >
    )
  }
}

export default Projects;
