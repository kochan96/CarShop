import { Form, Row, Col, Button } from "react-bootstrap";

export const SearchCarsForm = () => {
  return (
    <Row>
      <Col>
        <Form className="pb-2">
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} sm={3} controlId="formGridVehicleBrand">
              <Form.Label>Marka</Form.Label>
              <Form.Control type="text" placeholder="Marka pojazdu" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="formGridVehicleModel">
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" placeholder="Model" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="formGridMinPrice">
              <Form.Label>Cena od</Form.Label>
              <Form.Control type="text" placeholder="Cena od" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="formGridMaxPrice">
              <Form.Label>Cena do</Form.Label>
              <Form.Control type="text" placeholder="Cena do" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} sm={3}  controlId="formGridVehicleMinYear">
              <Form.Label>Rok produkcji od</Form.Label>
              <Form.Control type="text" placeholder="Rok produkcji od" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="formGridVehicleMaxYear">
              <Form.Label>Rok produkcji do</Form.Label>
              <Form.Control type="text" placeholder="Rok produkcji do" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="formGridMinMileage">
              <Form.Label>Przebieg od</Form.Label>
              <Form.Control type="text" placeholder="Przebieg od" />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3}  controlId="formGridMaxMileage">
              <Form.Label>Przebieg do</Form.Label>
              <Form.Control type="text" placeholder="Przebieg do" />
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
