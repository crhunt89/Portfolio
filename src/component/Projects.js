import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Creature from '../Assets/Creature.PNG';
import Static from '../Assets/netflixStatic.jpg';
import Cover from '../Assets/guitar.jpg';
import Alive from '../Assets/background2.jpg';


const Projects = () => {
  return (
    <div>
      <Row>
        <Col className="banner"><h1>My Projects</h1></Col>
      </Row>
    <Carousel className="projects" fade="true">
      <Carousel.Item>
        <a href="https://codepen.io/crhunt21/pen/QeaGdP" target="_blank">
        <img className="d-block w-100" src={Creature} alt="First slide"/>
        </a>
        <Carousel.Caption>
          <h3 color="black">Rick and Morty</h3>
          <p color="black">This project was from the first time I ever used HTML and CSS.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://crhunt89.github.io/staticLayout/" target="_blank">
          <img className="d-block w-100" src={Static} alt="Third slide"/>
        </a>
        <Carousel.Caption>
          <h3>Netflix</h3>
          <p>This is an attempt at making the front page of Netflix. This is from the second time I used HTML and CSS.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://covermeup.herokuapp.com/" target="_blank">
        <img className="d-block w-100" src={Cover} alt="Third slide"/>
        </a>
        <Carousel.Caption>
          <h3>Cover Me Up</h3>
          <p>A project where I used React.js and Node.js to build a fully functional web application</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://rickandmortydeadoralive.firebaseapp.com/" target="_blank">
        <img className="d-block w-100" src={Alive} alt="Fourth slide"/>
        </a>
        <Carousel.Caption>
          <h3>Rick and Morty Dead or Alive</h3>
          <p>A simple web application that uses the Rick and Morty API</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Projects;