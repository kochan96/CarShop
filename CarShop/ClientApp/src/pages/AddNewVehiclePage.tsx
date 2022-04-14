import { useState } from "react";
import { Form, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FuelType, VehicleType } from "../api";
import { Layout } from "../layout/Layout";
import { mapFuelType, mapVehicleType } from "../utils/enumMappings";
import { emailRegex } from "../utils/patterns";

export const AddNewVehiclePage = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const { errors } = formState;
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      var form_data = new FormData();
      for (var key in data) {
        console.log(typeof data[key]);
        if (key === "thumbnail" || key === "images") {
          for (var x = 0; x < data[key].length; x++) {
            form_data.append(key, data[key][x]);
          }
        } else {
          form_data.append(key, data[key]);
        }
      }

      const requestOptions = {
        method: "POST",
        body: form_data,
      };

      setIsLoading(true);
      const response = await fetch("/api/vehicles", requestOptions);

      if (response.ok) {
        reset();
        alert("Pomyślnie dodano");
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
    setIsLoading(false);
  };

  const requiredErrorText = "To pole jest wymagane";
  const onlyNumbersPatternErrorText = "Nieprawidłowy format (tylko liczby)";
  const emailPatterErorrText = "Nieprawidłowy format email";
  const yearPatternErrorText = "Nieprawidłowy format (4 cyfry)";

  return (
    <Layout>
      <Row className="justify-content-center pt-4">
        <Col>
          <Card>
            <Card.Header>Dodaj nową ofertę</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Form.Group className="mb-3" controlId="FirstName">
                  <Form.Label>Imię</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isLoading}
                    placeholder="Imię właściciela"
                    {...register("firstName", { required: requiredErrorText })}
                    isValid={
                      formState.touchedFields["firstName"] &&
                      !errors.firstName?.message
                    }
                    isInvalid={errors.firstName?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="LastName">
                  <Form.Label>Nazwisko</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isLoading}
                    placeholder="Nazwisko właściciela"
                    {...register("lastName", { required: requiredErrorText })}
                    isValid={
                      formState.touchedFields["lastName"] &&
                      !errors.lastName?.message
                    }
                    isInvalid={errors.lastName?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="PhoneNumber">
                  <Form.Label>Numer telefonu</Form.Label>
                  <Form.Control
                    type="tel"
                    disabled={isLoading}
                    placeholder="Numer telefonu właściciela"
                    {...register("phoneNumber", {
                      required: requiredErrorText,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: onlyNumbersPatternErrorText,
                      },
                    })}
                    isValid={
                      formState.touchedFields["phoneNumber"] &&
                      !errors.phoneNumber?.message
                    }
                    isInvalid={errors.phoneNumber?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phoneNumber?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    disabled={isLoading}
                    placeholder="Adres email właściciela"
                    {...register("email", {
                      required: requiredErrorText,
                      pattern: {
                        value: emailRegex,
                        message: emailPatterErorrText,
                      },
                    })}
                    isValid={
                      formState.touchedFields["email"] && !errors.email?.message
                    }
                    isInvalid={errors.email?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label>Tytuł</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isLoading}
                    placeholder="Tytuł ogłoszenia"
                    {...register("title", { required: requiredErrorText })}
                    isValid={
                      formState.touchedFields["title"] && !errors.title?.message
                    }
                    isInvalid={errors.title?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Brand">
                  <Form.Label>Marka</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isLoading}
                    placeholder="Marka"
                    {...register("brand", { required: requiredErrorText })}
                    isValid={
                      formState.touchedFields["brand"] && !errors.brand?.message
                    }
                    isInvalid={errors.brand?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.brand?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  id="Model"
                  controlId="formBasicModel"
                >
                  <Form.Label>Model</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isLoading}
                    placeholder="Model"
                    {...register("model", { required: requiredErrorText })}
                    isValid={
                      formState.touchedFields["model"] && !errors.model?.message
                    }
                    isInvalid={errors.model?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.model?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Year">
                  <Form.Label>Rok produkcji</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isLoading}
                    placeholder="Rok produkcji"
                    {...register("year", {
                      required: requiredErrorText,
                      pattern: {
                        value: /[0-9]{4}/,
                        message: yearPatternErrorText,
                      },
                    })}
                    isValid={
                      formState.touchedFields["year"] && !errors.year?.message
                    }
                    isInvalid={errors.year?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.year?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Price">
                  <Form.Label>Cena</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isLoading}
                    placeholder="Cena"
                    {...register("price", {
                      required: requiredErrorText,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: onlyNumbersPatternErrorText,
                      },
                    })}
                    isValid={
                      formState.touchedFields["price"] && !errors.price?.message
                    }
                    isInvalid={errors.price?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Mileage">
                  <Form.Label>Przebieg</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isLoading}
                    placeholder="Przebieg"
                    {...register("mileage", {
                      required: requiredErrorText,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: onlyNumbersPatternErrorText,
                      },
                    })}
                    isValid={
                      formState.touchedFields["mileage"] &&
                      !errors.mileage?.message
                    }
                    isInvalid={errors.mileage?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mileage?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="FuelType">
                  <Form.Label>Rodzaj paliwa</Form.Label>
                  <Form.Select disabled={isLoading} {...register("fuelType")}>
                    {Object.keys(FuelType)
                      .filter((x) => isNaN(Number(x)))
                      .map((value) => (
                        <option key={value} value={value}>
                          {mapFuelType(value as FuelType)}
                        </option>
                      ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.mileage?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="VehicleType">
                  <Form.Label>Rodzaj pojazdu</Form.Label>
                  <Form.Select
                    disabled={isLoading}
                    {...register("vehicleType")}
                  >
                    {Object.keys(VehicleType)
                      .filter((x) => isNaN(Number(x)))
                      .map((value) => (
                        <option key={value} value={value}>
                          {mapVehicleType(value as VehicleType)}
                        </option>
                      ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Thumbnail">
                  <Form.Label>Miniaturka</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    disabled={isLoading}
                    isValid={
                      formState.touchedFields["thumbnail"] &&
                      !errors.thumbnail?.message
                    }
                    isInvalid={errors.thumbnail?.message}
                    {...register("thumbnail", { required: requiredErrorText })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.thumbnail?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Images">
                  <Form.Label>Zdjęcia</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    multiple
                    disabled={isLoading}
                    isValid={
                      formState.touchedFields["images"] &&
                      !errors.images?.message
                    }
                    isInvalid={errors.images?.message}
                    {...register("images", { required: requiredErrorText })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.images?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Description">
                  <Form.Label>Opis</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    disabled={isLoading}
                    isValid={
                      formState.touchedFields["images"] &&
                      !errors.description?.message
                    }
                    isInvalid={errors.description?.message}
                    {...register("description", {
                      required: requiredErrorText,
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.images?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" disabled={isLoading} variant="primary">
                  {isLoading && (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}{" "}
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
