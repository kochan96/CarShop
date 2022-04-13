import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Layout } from "../layout/Layout";

export const ForbiddenPage = () => {
  return (
    <Layout>
      <Row className="pt-4">
        <Col className="mx-auto w-100 text-center">
          <h1>403: Oops, You do not have access for this operation</h1>
          <Link className="h2" to="/login">
            Go to login page
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};
