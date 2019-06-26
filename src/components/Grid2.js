import React, {Fragment} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Grid2 = () => {
  return (
    <Fragment>
      <Row style={{background: '#FACA71', color: '#FACA71'}}>
        <Col xs={6} md style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col xs={6} md style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col xs={6} md style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col xs={6} md style={{padding: 30, border: '1px solid white'}}>.</Col>
      </Row>
      <Row style={{background: '#FACA71', color: '#FACA71'}}>
        <Col sm={12} md={6} lg style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col sm={12} md={6} lg style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col sm={12} md={6} lg style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col sm={12} md={6} lg style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col sm={12} md={6} lg style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col sm={12} md={6} lg style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col sm={12} md={6} lg style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col sm={12} md={6} lg style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col sm={12} md={6} lg style={{padding: 30, border: '1px solid white'}}>.</Col>
        <Col sm={12} md={6} lg style={{padding: 30, border: '1px solid white'}}>.</Col>
      </Row>
    </Fragment>
  );
}

export default Grid2
