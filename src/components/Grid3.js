import React, {Fragment} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Grid3 = () => {
  return (
    <Fragment>
      <Row>
        <Col
          style={{
            background: 'red',
            padding: 30,
            color: 'red',
            border: '1px solid white'
          }}
          lg={{span:6,offset:6}}
          xs
          >
            .
          </Col>
      </Row>
      <Row>
        <Col
          style={{
            background: 'red',
            padding: 30,
            color: 'red',
            border: '1px solid white'
          }}
          lg={{span:8,offset:2}}
          xs={8}
          >
            .
          </Col>
      </Row>
      <Row>
        <Col
          style={{
            background: 'red',
            padding: 30,
            color: 'red',
            border: '1px solid white'
          }}
          lg={{span:2, offset:1}}
          xs={{span:2, offset:10}}
          >
            .
          </Col>
      </Row>
    </Fragment>
  );
}

export default Grid3
