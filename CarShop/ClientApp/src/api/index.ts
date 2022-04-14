export enum FuelType {
  "Petrol" = "Petrol",
  "Diesel" = "Diesel",
  "LPG" = "LPG",
  "Electric" = "Electric",
}

export enum VehicleType {
  "Sedan" = "Sedan",
  "Coupe" = "Coupe",
  "Combi" = "Combi",
  "Convertible" = "Convertible",
  "Compact" = "Compact",
  "MiniVan" = "MiniVan",
  "Suv" = "Suv",
}

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
  fuelType: FuelType;
  vehicleType: VehicleType;
  model: string;
  brand: string;
  createdOn: Date;
};

export type VehicleListResponse = {
  items: VehicleListItem[];
  lastPage: boolean;
};
