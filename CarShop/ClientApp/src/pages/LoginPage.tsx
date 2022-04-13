import { Row, Form, Col, Card, Button } from "react-bootstrap";
import { Layout } from "../layout/Layout";
import logolight from "../logo-light.svg";

export const LoginPage = () => {
  return (
    <Layout>
      <Row className="justify-content-center pt-4">
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <Card>
            <Card.Img src={logolight} />
            <Card.Body>
              <Form method="post" action="api/auth/login">
                <Form.Group className="mb-3" controlId="userName">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    name="userName"
                    placeholder="Login lub adres email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Hasło</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    required
                    placeholder="Hasło"
                  />
                </Form.Group>

                <Button type="submit">Zaloguj</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
