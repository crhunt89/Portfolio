import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Photo from '../Assets/CodyHunt2.jpg';
import Resume from '../Assets/Resume.pdf';

const About = () => {
  return (
    <Container fluid="true" className="container" style={{ marginLeft: 0 + 'px', marginRight: 0 + 'px' }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}><h1>About Me</h1></Col>
      </Row>
      <Row className="row">
        <Col>Hello my name is Cody Hunt a graduate from the Eleven Fifty Academy in their JavaScript cohort, where besides basic JavaScript I learned a long list of Front End frameworks, Back End frameworks, and the Agile workflow. I'm always pushing myself to learn other languages as well. My past careers in Restraunt Management and Sales have taught me a lot about business and leadership. I am changing careers into a technical role because I want to follow my passion for computers and technology, which started in High School when I was building computers from scratch. You have probably found yourself on this page because I am a canidate for a great career at your company. When you want to take a break from looking at my fantastic projects below, feel free to take a look at my <a href={Resume} target="_blank">resume</a>, <a href="https://linkedin.com/in/crhunt21" target="_blank">Linkedin</a> and <a href="https://github.com/crhunt89" target="_blank">Github</a>!!</Col>
        <Col><Image src={Photo} fluid /></Col>
        <Col>
          <h1>Skills and Languages</h1>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>PHP</li>
          <li>PostgresSQL</li>
          <li>Angular</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
          <li>RestAPI</li>
          <li>Agile</li>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
