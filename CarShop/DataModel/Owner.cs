using System;
using System.Collections.Generic;

namespace CarShop.DataModel
{
    public class Owner
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public List<Vehicle> Vehicles { get; set; }

    }
}
