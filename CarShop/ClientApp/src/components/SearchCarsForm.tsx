import { Button, Col, Form, Row } from "react-bootstrap";

export const SearchCarsForm = () => {
  return (
    <Row>
      <Col>
        <Form className="pb-2">
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} sm={3} controlId="Marka">
              <Form.Label>Marka</Form.Label>
              <Form.Control name="Marka" type="text" placeholder="Marka pojazdu" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="Model">
              <Form.Label>Model</Form.Label>
              <Form.Control name="Model" type="text" placeholder="Model" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="MinPrice">
              <Form.Label>Cena od</Form.Label>
              <Form.Control name="MinPrice" type="text" placeholder="Cena od" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="MaxPrice">
              <Form.Label>Cena do</Form.Label>
              <Form.Control name="MaxPrice" type="text" placeholder="Cena do" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} sm={3}  controlId="MinYear">
              <Form.Label>Rok produkcji od</Form.Label>
              <Form.Control name="MinYear" type="text" placeholder="Rok produkcji od" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="MaxYear">
              <Form.Label>Rok produkcji do</Form.Label>
              <Form.Control name="MaxYear" type="text" placeholder="Rok produkcji do" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="MinMileage">
              <Form.Label>Przebieg od</Form.Label>
              <Form.Control name="MinMileage" type="text" placeholder="Przebieg od" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="MaxMileage">
              <Form.Label>Przebieg do</Form.Label>
              <Form.Control name="MaxMileage" type="text" placeholder="Przebieg do" />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Szukaj
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
