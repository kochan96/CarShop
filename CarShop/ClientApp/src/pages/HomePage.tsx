import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { VehicleListItem } from "../api";
import { SearchCarsForm } from "../components/SearchCarsForm";
import { SearchCarsResult } from "../components/SearchCarsResult";
import { Layout } from "../layout/Layout";

export const HomePage = () => {
  const [vehicles, setVehicles] = useState<VehicleListItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("/api/vehicles/list");
      const jsonData = await response.json();
      setVehicles(jsonData as VehicleListItem[]);
    };

    loadData();
  }, []);

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
