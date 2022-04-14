import { useCallback, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { VehicleListItem, VehicleListResponse } from "../api";
import {
  SearchCarsForm,
  SearchCarsFormData,
} from "../components/SearchCarsForm";
import { SearchCarsResult } from "../components/SearchCarsResult";
import { Layout } from "../layout/Layout";

export const HomePage = () => {
  const [vehicles, setVehicles] = useState<VehicleListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [nextPageDisabled, setNextPageDisabled] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<SearchCarsFormData>(
    {} as SearchCarsFormData
  );

  const loadData = useCallback(
    async (data: SearchCarsFormData, pageIndex: number) => {
      try {
        var queryString = Object.entries(data)
          .filter((entry) => !!entry[1])
          .map((entry) => "&" + entry[0] + "=" + entry[1])
          .join();
        setIsLoading(true);
        const response = await fetch(
          `/api/vehicles/list?page=${pageIndex}${queryString}`
        );
        const jsonData = (await response.json()) as VehicleListResponse;
        setVehicles(jsonData.items);
        setNextPageDisabled(jsonData.lastPage);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    },
    []
  );

  useEffect(() => {
    loadData({} as SearchCarsFormData, 1);
  }, [loadData]);

  const onSubmit = async (data: SearchCarsFormData) => {
    setPageIndex(1);
    await loadData(data, 1);
    setFilterData(data);
  };

  const onNextPage = async () => {
    setPageIndex((prev) => prev + 1);
    await loadData(filterData, pageIndex + 1);
  };

  const onPreviousPage = async () => {
    setPageIndex((prev) => prev - 1);
    await loadData(filterData, pageIndex - 1);
  };

  return (
    <Layout>
      <Row className="justify-content-center bg-gray pt-4">
        <Col lg={12} xl={10}>
          <SearchCarsForm onSubmit={onSubmit} />
        </Col>
      </Row>
      <Row className="justify-content-center pt-4">
        <Col lg={12} xl={10}>
          <SearchCarsResult
            isLoading={isLoading}
            items={vehicles}
            nextPageDisabled={nextPageDisabled}
            previousDisabled={pageIndex === 1}
            onNextPage={onNextPage}
            onPreviousPage={onPreviousPage}
          />
        </Col>
      </Row>
    </Layout>
  );
};
