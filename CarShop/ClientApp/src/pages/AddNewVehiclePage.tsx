import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { Layout } from "../layout/Layout";

export const AddNewVehiclePage = () => {
  return (
    <Layout>
      <Row className="justify-content-center pt-4">
        <Col>
          <Card>
            <Card.Header>Dodaj nową ofertę</Card.Header>
            <Card.Body>
              <Form
                action="api/Vehicles"
                method="post"
                encType="multipart/form-data"
              >
                <Form.Group className="mb-3" controlId="FirstName">
                  <Form.Label>Imię</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="FirstName"
                    placeholder="Imię właściciela"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="LastName">
                  <Form.Label>Nazwisko</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="LastName"
                    placeholder="Nazwisko właściciela"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="PhoneNumber">
                  <Form.Label>Numer telefonu</Form.Label>
                  <Form.Control
                    type="text"
                    name="PhoneNumber"
                    placeholder="Numer telefonu właściciela"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="Email"
                    placeholder="Adres email właściciela"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label>Tytuł</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="Title"
                    placeholder="Tytuł ogłoszenia"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Brand">
                  <Form.Label>Marka</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="Brand"
                    placeholder="Marka"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  id="Model"
                  controlId="formBasicModel"
                >
                  <Form.Label>Model</Form.Label>
                  <Form.Control
                    name="Model"
                    required
                    type="text"
                    placeholder="Model"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Year">
                  <Form.Label>Rok produkcji</Form.Label>
                  <Form.Control
                    name="Year"
                    type="text"
                    placeholder="Rok produkcji"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Price">
                  <Form.Label>Cena</Form.Label>
                  <Form.Control
                    name="Price"
                    required
                    type="text"
                    placeholder="Cena"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Mileage">
                  <Form.Label>Przebieg</Form.Label>
                  <Form.Control
                    name="Mileage"
                    required
                    type="text"
                    placeholder="Przebieg"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="FuelType">
                  <Form.Label>Rodzaj paliwa</Form.Label>
                  <Form.Control
                    name="FuelType"
                    type="text"
                    placeholder="Rodzaj paliwa"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="VehicleType">
                  <Form.Label>Rodzaj pojazdu</Form.Label>
                  <Form.Control
                    name="VehicleType"
                    type="text"
                    placeholder="Rodzaj pojazdu"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Thumbnail">
                  <Form.Label>Miniaturka</Form.Label>
                  <Form.Control name="Thumbnail" type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Images">
                  <Form.Label>Zdjęcia</Form.Label>
                  <Form.Control name="Images" type="file" multiple />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Description">
                  <Form.Label>Opis</Form.Label>
                  <Form.Control name="Description" as="textarea" rows={5} />
                </Form.Group>

                <Button type="submit" variant="primary">
                  Stwórz
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
