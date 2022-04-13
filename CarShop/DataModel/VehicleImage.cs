using System;

namespace CarShop.DataModel
{
    public class VehicleImage
    {
        public Guid Id { get; set; }

        public Guid VehicleId { get; set; }

        public Vehicle Vehicle { get; set; }

        public byte[] Content { get; set; }

        public string ContentType { get; set; }

        public bool IsThumbnail { get; set; }
    }
}
