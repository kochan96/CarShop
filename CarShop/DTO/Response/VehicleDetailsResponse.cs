using CarShop.DataModel;
using System;
using System.Collections.Generic;

namespace CarShop.DTO.Response
{
    public class VehicleDetailsResponse
    {
        public Guid Id { get; set; }

        public List<Guid> ImageIds { get; set; }

        public string Title { get; set; }

        public long Mileage { get; set; }

        public int Year { get; set; }

        public decimal Price { get; set; }

        public DateTime CreatedOn { get; set; }

        public FuelType FuelType { get; set; }

        public VehicleType VehicleType { get; set; }

        //TODO maybe change to separate table
        public string Brand { get; set; }

        public string Model { get; set; }

        public string Description { get; set; }

        public OwnerResponse Owner { get; set; }
    }
}
