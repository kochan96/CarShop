using System;
using System.Collections.Generic;

namespace CarShop.DataModel
{
    public class Vehicle
    {
        public Guid Id { get; set; }

        public Guid OwnerId { get; set; }

        public Owner Owner { get; set; }

        public string Title { get; set; }

        public List<VehicleImage> Images { get; set; }

        public long Mileage { get; set; }

        public int Year { get; set; }

        public decimal Price { get; set; }

        public DateTime CreatedOn { get; set; }

        public FuelType FuelType { get; set; }

        public VehicleType VehicleType { get; set; }

        //TODO maybe change to separate table
        public string Brand { get; set; }

        //TODO maybe change to separate table
        public string Model { get; set; }

        public string Description { get; set; }
    }
}
