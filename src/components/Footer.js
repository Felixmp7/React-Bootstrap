import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles/Footer.css'

const Footer = () => {
  return (
    <div className="Container">
      <Container>
        <Row className="text-center">
          <Col lg md={4} className="p-3">Preguntas Frecuentes</Col>
          <Col lg md={4} className="p-3">Contactanos</Col>
          <Col lg md={4} className="p-3">Prensa</Col>
          <Col lg md={3} className="p-3">Conferencias</Col>
          <Col lg md={3} className="p-3">Terminos y Condiciones</Col>
          <Col lg md={3} className="p-3">Privacidad</Col>
          <Col lg md={3} className="p-3">Estudiantes</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer
