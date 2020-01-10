import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Golf from '../Assets/golf.jpg';
import Play from '../Assets/psSilhouette.jpg';
import Network from '../Assets/networking.jpg';
import Cooking from '../Assets/chopping.jpg';


const Other = () =>{
  return(
    <Container>
      <Row>
      <Col className="banner"><h1>My Other Interests</h1></Col>
      </Row>
      <Row>
      <Col className="banner"><h4>I have many other interests outside of computer programming, below are just a few of them</h4></Col>
      </Row>
      <br/>
      <br/>
  <Row>
    <Col>
      <h5>Golf</h5>
      <Image src={Golf} rounded="true" fluid="true"/>
    </Col>
    <Col>
    <h5>Gamming</h5>
      <Image src={Play} roundedCircle="true" fluid="true"/>
    </Col>
    <Col>
    <h5>Networking</h5>
      <Image src={Network} thumbnail="true" fluid="true"/>
    </Col>
    <Col>
    <h5>Cooking</h5>
      <Image src={Cooking} roundedCircle="true" fluid="true"/>
    </Col>
  </Row>
</Container>
  );
}

export default Other;