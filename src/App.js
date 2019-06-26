import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <Container
      style={{ background: 'lightblue'}}
      // fluid
      >
        <Row>
          <Col lg={3} style={{background: 'yellow'}}>1 of 2</Col>
          <Col lg={9} style={{background: 'blue'}}>2 of 2</Col>
        </Row>
    </Container>
  );
}

export default App;
