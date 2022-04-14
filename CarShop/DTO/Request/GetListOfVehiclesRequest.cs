namespace CarShop.DTO.Request
{
    public class GetListOfVehiclesRequest
    {
        public string Brand { get; set; }

        public string Model { get; set; }

        public decimal? MinPrice { get; set; }

        public decimal? MaxPrice { get; set; }

        public int? MinYear { get; set; }

        public int? MaxYear { get; set; }

        public long? MinMileage { get; set; }
        public long? MaxMileage { get; set; }

        public int Page { get; set; }
    }
}
