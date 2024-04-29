import React from 'react';
import { Container, Row, Col, Nav, Tab, Table } from 'react-bootstrap';

function AdminPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to the Admin Panel</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tab.Container id="admin-tabs" defaultActiveKey="users">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="users">Users</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="products">Products</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="orders">Orders</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="users">
                    <h2>Manage Users</h2>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Display users data here */}
                      </tbody>
                    </Table>
                  </Tab.Pane>
                  <Tab.Pane eventKey="products">
                    <h2>Manage Products</h2>
                    {/* Add product management components here */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="orders">
                    <h2>Manage Orders</h2>
                    {/* Add order management components here */}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;
