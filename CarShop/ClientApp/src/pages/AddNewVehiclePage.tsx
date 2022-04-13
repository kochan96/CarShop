import React from "react";
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
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicAuthorFirstName"
                >
                  <Form.Label>Imię</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Imię właściciela"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicAuthorFirstName"
                >
                  <Form.Label>Nazwisko</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Nazwisko właściciela"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicAuthorPhoneNumber"
                >
                  <Form.Label>Numer telefonu</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Numer telefonu właściciela"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicAuthorPhoneNumber"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Adres email właściciela"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Tytuł</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Tytuł ogłoszenia"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBrand">
                  <Form.Label>Marka</Form.Label>
                  <Form.Control required type="text" placeholder="Marka" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicModel">
                  <Form.Label>Model</Form.Label>
                  <Form.Control required type="text" placeholder="Model" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicYear">
                  <Form.Label>Rok produkcji</Form.Label>
                  <Form.Control type="text" placeholder="Rok produkcji" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Cena</Form.Label>
                  <Form.Control required type="text" placeholder="Cena" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMileage">
                  <Form.Label>Przebieg</Form.Label>
                  <Form.Control required type="text" placeholder="Przebieg" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFuelType">
                  <Form.Label>Rodzaj paliwa</Form.Label>
                  <Form.Control type="text" placeholder="Rodzaj paliwa" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicVehicleType">
                  <Form.Label>Rodzaj pojazdu</Form.Label>
                  <Form.Control type="text" placeholder="Rodzaj pojazdu" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicThumbnail">
                  <Form.Label>Miniaturka</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImages">
                  <Form.Label>Zdjęcia</Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImages">
                  <Form.Label>Opis</Form.Label>
                  <Form.Control as="textarea" rows={5} />
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
