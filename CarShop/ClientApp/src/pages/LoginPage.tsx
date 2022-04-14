import { Row, Form, Col, Card, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Layout } from "../layout/Layout";
import logolight from "../logo-light.svg";

type LoginFormData = {
  userName: string;
  password: string;
};

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = async (data: any) => {
    try {
      var form_data = new FormData();
      for (var key in data) {
        form_data.append(key, data[key]);
      }

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      const response = await fetch("/api/auth/login", requestOptions);
      if (response.ok) {
        window.location.href ="/"
      } else {
        alert("Nieprawidłowe hasło lub nazwa użytkownika");
      }
    } catch (err) {
      console.log(err);
      alert("Nieznany błąd");
    }
  };

  return (
    <Layout>
      <Row className="justify-content-center pt-4">
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <Card>
            <Image src={logolight} className="card-img" />
            <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="userName">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Nazwa użytkownika"
                    {...register("userName")}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Hasło</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    placeholder="Hasło"
                    {...register("password")}
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
