export type Vehicle = {
  description: string;
  owner: Owner;
  imageIds: string[];
} & VehicleListItem;

export type Owner = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export type VehicleListItem = {
  id: string;
  thumbnailId: string;
  title: string;
  price: string;
  year: number;
  mileage: string;
  fuelType: string;
  vehicleType: string;
  model: string;
  brand: string;
  createdOn: Date;
};
