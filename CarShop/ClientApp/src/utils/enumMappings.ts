import { FuelType, VehicleType } from "../api";

export const mapFuelType = (fuelType: FuelType): string => {
  switch (fuelType) {
    case FuelType.Diesel:
      return "Diesel";
    case FuelType.Electric:
      return "Electric";
    case FuelType.LPG:
      return "LPG";
    case FuelType.Petrol:
      return "Benzyna";
    default:
      const _check: never = fuelType;
      return _check;
  }
};

export const mapVehicleType = (vehicleType: VehicleType): string => {
  switch (vehicleType) {
    case VehicleType.Suv:
      return "SUV";
    case VehicleType.Coupe:
      return "Coupe";
    case VehicleType.Convertible:
      return "Kabriolet";
    case VehicleType.Compact:
      return "Kompakt";
    case VehicleType.Combi:
      return "Kombi";
    case VehicleType.Sedan:
      return "Sedan";
    case VehicleType.MiniVan:
      return "MiniVan";
    default:
      const _check: never = vehicleType;
      return _check;
  }
};
