using CarShop.DataModel;
using Microsoft.AspNetCore.Http;
using System;

namespace CarShop.DTO.Request
{
    public class CreateCarOfferRequest
    {
        public IFormFile Thumbnail { get; set; }

        public IFormFile[] Images { get; set; }

        public string Title { get; set; }

        public long Mileage { get; set; }

        public int Year { get; set; }

        public decimal Price { get; set; }

        public FuelType FuelType { get; set; }

        public VehicleType VehicleType { get; set; }

        public string Brand { get; set; }

        public string Model { get; set; }

        public string Description { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }
    }
}
