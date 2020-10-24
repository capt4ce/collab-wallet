import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const RecordListHeader: React.FC = () => {
  const monthArray = ['January', 'February'];
  return (
    <Row>
      <Col sm={6}>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              {monthArray.map((item) => (
                <option>{item}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default RecordListHeader;
