import React from 'react';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';

const RecordDetail: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Date
              </Form.Label>
              <Col sm="10">
                <Form.Control type="input" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Account
              </Form.Label>
              <Col sm="10">
                <Form.Control type="input" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Category
              </Form.Label>
              <Col sm="10">
                <Form.Control type="input" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Amount
              </Form.Label>
              <Col sm="10">
                <Form.Control type="input" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Note
              </Form.Label>
              <Col sm="10">
                <Form.Control type="input" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control type="input" />
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RecordDetail;
