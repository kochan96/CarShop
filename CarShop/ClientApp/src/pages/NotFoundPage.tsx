import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Layout } from "../layout/Layout";

export const NotFoundPage = () => {
  return (
    <Layout>
      <Row className="pt-4">
        <Col className="mx-auto w-100 text-center">
          <h1>404: Oops, this page does not exist</h1>
          <Link className="h2" to="/">
            Go to home page
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};
