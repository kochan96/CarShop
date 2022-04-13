import { Row, Col } from "react-bootstrap";
import { SearchCarsForm } from "../components/SearchCarsForm";
import { SearchCarsResult } from "../components/SearchCarsResult";
import { vehicles } from "../api";
import { Layout } from "../layout/Layout";

export const HomePage = () => {
  return (
    <Layout>
      <Row className="justify-content-center bg-gray pt-4">
        <Col lg={12} xl={10}>
          <SearchCarsForm />
        </Col>
      </Row>
      <Row className="justify-content-center pt-4">
        <Col lg={12} xl={10}>
          <SearchCarsResult items={vehicles} />
        </Col>
      </Row>
    </Layout>
  );
};
