import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Jumbo = () => {
  return(
    <Jumbotron fluid className = "tron" style={{marginBottom: 0+'px'}}>
  <Container>
    <h1>Cody R. Hunt</h1>
    <p>Software Developer</p>
  </Container>
</Jumbotron>
  )
}

export default Jumbo;