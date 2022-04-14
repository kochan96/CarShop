import { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";

export type SearchCarsFormData = {
  brand: string;
  model: string;
  minPrice: string;
  maxPrice: string;
  minYear: string;
  maxYear: string;
  minMileage: string;
  maxMileage: string;
};

export type SearchCaseFormProps = {
  onSubmit: (data: SearchCarsFormData) => Promise<void>;
};

export const SearchCarsForm = (props: SearchCaseFormProps) => {
  const { register, handleSubmit } = useForm<SearchCarsFormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: SearchCarsFormData) => {
    setIsLoading(true);
    await props.onSubmit(data);
    setIsLoading(false);
  };

  return (
    <Row>
      <Col>
        <Form className="pb-2" onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} sm={3} controlId="brand">
              <Form.Label>Marka</Form.Label>
              <Form.Control
                type="text"
                              disabled={isLoading}
                placeholder="Marka pojazdu"
                {...register("brand")}
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3} controlId="model">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                              disabled={isLoading}
                placeholder="Model"
                {...register("model")}
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3} controlId="MinPrice">
              <Form.Label>Cena od</Form.Label>
              <Form.Control
                type="number"
                              disabled={isLoading}
                placeholder="Cena od"
                {...register("minPrice")}
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3} controlId="MaxPrice">
              <Form.Label>Cena do</Form.Label>

              <Form.Control
                type="number"
                              disabled={isLoading}
                placeholder="Cena do"
                {...register("maxPrice")}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} sm={3} controlId="MinYear">
              <Form.Label>Rok produkcji od</Form.Label>
              <Form.Control
                type="number"
                              disabled={isLoading}
                placeholder="Rok produkcji od"
                {...register("minYear")}
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3} controlId="MaxYear">
              <Form.Label>Rok produkcji do</Form.Label>
              <Form.Control
                type="number"
                              disabled={isLoading}
                placeholder="Rok produkcji do"
                {...register("maxYear")}
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3} controlId="MinMileage">
              <Form.Label>Przebieg od</Form.Label>
              <Form.Control
                type="number"
                              disabled={isLoading}
                placeholder="Przebieg od"
                {...register("minMileage")}
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={3} controlId="MaxMileage">
              <Form.Label>Przebieg do</Form.Label>
              <Form.Control
                type="number"
                placeholder="Przebieg do"
                              disabled={isLoading}
                {...register("maxMileage")}
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                {isLoading && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                Szukaj
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
