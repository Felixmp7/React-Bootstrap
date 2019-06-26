import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles/Footer.css'

const Footer = () => {
  return (
    <div className="Container">
      <Container>
        <Row>
          <Col>Preguntas Frecuentes</Col>
          <Col>Contactanos</Col>
          <Col>Prensa</Col>
          <Col>Conferencias</Col>
          <Col>Terminos y Condiciones</Col>
          <Col>Privacidad</Col>
          <Col>Estudiantes</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer
