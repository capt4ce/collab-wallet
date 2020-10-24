import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

import records from '../../mockData/records';

const RecordList: React.FC = () => {
  return (
    <Row>
      <Col>
        {Array.isArray(records) &&
          records.map(({ records }) => {
            return (
              <Table className="mb-5">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>About</th>
                    <th>Expense</th>
                  </tr>
                </thead>

                <tbody>
                  {Array.isArray(records) &&
                    records.map(
                      ({
                        id,
                        category,
                        note,
                        account,
                        amount,
                        description,
                        time,
                      }) => {
                        return (
                          <tr key={id}>
                            <td>{category}</td>
                            <td>{note}</td>
                            <td>{amount}</td>
                          </tr>
                        );
                      }
                    )}
                </tbody>
              </Table>
            );
          })}
      </Col>
    </Row>
  );
};

export default RecordList;
