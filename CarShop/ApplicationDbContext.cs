using CarShop.DataModel;
using Microsoft.EntityFrameworkCore;

namespace CarShop
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Owner> Owners { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<VehicleImage> VehicleImages { get; set; }

        public DbSet<Admin> Admins { get; set; }


        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

    }
}
