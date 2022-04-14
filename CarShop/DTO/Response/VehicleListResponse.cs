using System.Collections.Generic;

namespace CarShop.DTO.Response
{
    public class VehicleListResponse
    {
        public List<VehicleListItemResponse> Items { get; set; }

        public bool LastPage { get; set; }
    }
}
