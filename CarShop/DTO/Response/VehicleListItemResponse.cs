using CarShop.DataModel;
using System;

namespace CarShop.DTO.Response
{
    public class VehicleListItemResponse
    {
        public Guid Id { get; set; }

        public Guid ThumbnailId { get; set; }

        public string Title { get; set; }

        public long Mileage { get; set; }

        public int Year { get; set; }

        public string Price { get; set; }

        public DateTime CreatedOn { get; set; }

        public string FuelType { get; set; }

        public string VehicleType { get; set; }

        //TODO maybe change to separate table
        public string Brand { get; set; }

        public string Model { get; set; }
    }
}
