import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <Container
      style={{ background: 'lightblue'}}
      fluid={true}
      >
        <Row>
          <Col style={{border: '1px solid black'}}>1 of 2</Col>
          <Col style={{border: '1px solid black'}}>2 of 2</Col>
        </Row>
        <Row>
          <Col style={{border: '1px solid black'}}>1 of 2</Col>
          <Col style={{border: '1px solid black'}}>2 of 2</Col>
          <Col style={{border: '1px solid black'}}>3 of 3</Col>
        </Row>
    </Container>
  );
}

export default App;
