import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { PATH_HOME } from '../../utils/constants';

const RecordViewHeader: React.FC = () => {
  return (
    <div>
      <Row>
        <Col>
          <Link to={PATH_HOME}>Back to Home</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav variant="pills" defaultActiveKey="expense" fill>
            <Nav.Item>
              <Nav.Link eventKey="income">Income</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="expense">Expense</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="transfer">Transfer</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </div>
  );
};

export default RecordViewHeader;
