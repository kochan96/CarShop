import { useState, useEffect } from "react";
import {
  Col,
  Row,
  Carousel,
  Card,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Vehicle } from "../api";
import { Layout } from "../layout/Layout";
import { mapFuelType, mapVehicleType } from "../utils/enumMappings";

export const CarDetailsPage = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const { id } = useParams();
  const [data, setData] = useState<Vehicle>();
  const [isLoading, setIsLoading] = useState(true);

  //TODO error handling
  useEffect(() => {
    const loadData = async (id: string) => {
      setIsLoading(true);
      const response = await fetch(`/api/vehicles/${id}`);
      const jsonData = await response.json();
      setData(jsonData as Vehicle);
      setIsLoading(false);
    };

    if (id) {
      loadData(id);
    } else {
      setIsLoading(false);
    }
  }, [id]);

  return (
    <Layout>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : !data ? (
        <h1>Data not found</h1>
      ) : (
        <Row className="justify-content-center pt-4">
          <Col xl={10}>
            <Row>
              <Col>
                <Link to="/">{"< Wróć"}</Link>
              </Col>
            </Row>
            <Row className="pt-2">
              <Col xs={12} md>
                <Row>
                  <Col>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                      {data.imageIds.map((value, index) => (
                        <Carousel.Item key={value}>
                          <Image
                            fluid
                            src={`/api/image/${value}`}
                            alt={`${index}`}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md>
                <Row>
                  <Col>
                    <div className="h3">{data.title}</div>
                    <div className="fs-5">
                      {data.brand} {data.model} &bull; {data.year} &bull;{" "}
                      {data.mileage} &bull; {mapFuelType(data.fuelType)} &bull; {mapVehicleType(data.vehicleType)}
                    </div>
                    <div className="h2 pt-4">Cena: {data.price}</div>
                  </Col>
                </Row>
                <Row className="pt-4">
                  <Col xs={12} md="auto">
                    <Card>
                      <Card.Header>Właściciel</Card.Header>
                      <Card.Body>
                        <Card.Title>
                          {data.owner.firstName} {data.owner.lastName}
                        </Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>
                          PhoneNumber: {data.owner.phoneNumber}
                        </ListGroupItem>
                        <ListGroupItem>Email: {data.owner.email}</ListGroupItem>
                      </ListGroup>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col>
                <div className="h2">Opis</div>
                <p>{data.description}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Layout>
  );
};
