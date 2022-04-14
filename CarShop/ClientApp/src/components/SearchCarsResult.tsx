import { Image, Col, Row, Stack, Card, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router";
import "moment/locale/pl";
import moment from "moment";
import { VehicleListItem } from "../api";
import { mapFuelType, mapVehicleType } from "../utils/enumMappings";

const SearchCarsResultItem = (props: VehicleListItem) => {
  const navigateTo = useNavigate();

  return (
    <Card
      className="car-list-item p-2"
      onClick={() => navigateTo(`/car-detail/${props.id}`)}
    >
      <Row>
        <Col xs={12} sm={4} md className="text-sm-start text-center">
          <Image fluid src={`/api/image/${props.thumbnailId}`} />
        </Col>
        <Col xs={12} sm={5} className="pl-4 text-sm-start text-center">
          <div className="h2 card-title">{props.title}</div>
          <div className="fs-4">
            {props.brand} {props.model} &bull; {props.year} &bull;{" "}
            {props.mileage} &bull; {mapFuelType(props.fuelType)} &bull; {mapVehicleType(props.vehicleType)}
          </div>
        </Col>
        <Col xs={12} sm={3} md className="text-sm-end text-center">
          <div className="h2">{props.price}</div>
          <div className="fs-6 align-bottom">
            Stworzono: {moment(props.createdOn).fromNow()}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export type SearchCarsResultProps = {
  items: VehicleListItem[];
};

export const SearchCarsResult = (props: SearchCarsResultProps) => {
  if (!props.items || !props.items.length) {
    return <div className="h4">No data</div>;
  }

  return (
    <>
      <Stack gap={2} className="mb-3">
        {props.items.map((value) => (
          <SearchCarsResultItem key={value.id} {...value} />
        ))}
      </Stack>
      <Row className="justify-content-end">
        <Col xs="auto">
          <Pagination>
            <Pagination.Prev>{"< Poprzednia strona"}</Pagination.Prev>
            <Pagination.Next>{"Następna strona >"}</Pagination.Next>
          </Pagination>
        </Col>
      </Row>
    </>
  );
};
