using CarShop;
using CarShop.DataModel;
using CarShop.DTO.Request;
using CarShop.DTO.Response;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.IO;
using System.Linq;

namespace ComputerShop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VehiclesController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public VehiclesController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        private const int PageSize = 4;

        [HttpGet]
        [Route("list")]
        public IActionResult GetList([FromQuery] GetListOfVehiclesRequest query)
        {

            var queryable = _dbContext.Vehicles.AsQueryable();
            if (!string.IsNullOrWhiteSpace(query.Brand))
            {
                queryable = queryable.Where(x => x.Brand.Contains(query.Brand));
            }

            if (!string.IsNullOrWhiteSpace(query.Model))
            {
                queryable = queryable.Where(x => x.Model.Contains(query.Model));
            }

            if (query.MinPrice.HasValue)
            {
                queryable = queryable.Where(x => x.Price >= query.MinPrice);
            }

            if (query.MaxPrice.HasValue)
            {
                queryable = queryable.Where(x => x.Price <= query.MaxPrice);
            }

            if (query.MinYear.HasValue)
            {
                queryable = queryable.Where(x => x.Year >= query.MinYear);
            }

            if (query.MaxYear.HasValue)
            {
                queryable = queryable.Where(x => x.Year <= query.MaxYear);
            }

            if (query.MinMileage.HasValue)
            {
                queryable = queryable.Where(x => x.Year >= query.MinMileage);
            }

            if (query.MaxMileage.HasValue)
            {
                queryable = queryable.Where(x => x.Year <= query.MaxMileage);
            }

            var vehicles = queryable.Include(x => x.Images).Select(x => new VehicleListItemResponse()
            {
                Id = x.Id,
                Brand = x.Brand,
                CreatedOn = x.CreatedOn,
                FuelType = x.FuelType,
                Mileage = x.Mileage,
                Model = x.Model,
                Price = $"{x.Price} PLN",
                ThumbnailId = x.Images.First(x => x.IsThumbnail).Id,
                Title = x.Title,
                VehicleType = x.VehicleType,
                Year = x.Year
            }).Skip(PageSize * (query.Page - 1))
            .Take(PageSize + 1)
            .ToList();

            var response = new VehicleListResponse()
            {
                Items = vehicles.Take(PageSize).ToList(),
                LastPage = vehicles.Count <= PageSize
            };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var vehicle = _dbContext.Vehicles.Include(x => x.Owner).Include(x => x.Images).FirstOrDefault(x => x.Id == id);
            if (vehicle == null) return NotFound();

            var response = new VehicleDetailsResponse()
            {
                Owner = new OwnerResponse()
                {
                    Email = vehicle.Owner.Email,
                    FirstName = vehicle.Owner.FirstName,
                    LastName = vehicle.Owner.LastName,
                    PhoneNumber = vehicle.Owner.PhoneNumber,
                },
                Brand = vehicle.Brand,
                CreatedOn = vehicle.CreatedOn,
                Description = vehicle.Description,
                FuelType = vehicle.FuelType,
                Id = vehicle.Id,
                Mileage = vehicle.Mileage,
                Model = vehicle.Model,
                Price = $"{vehicle.Price} PLN",
                Title = vehicle.Title,
                VehicleType = vehicle.VehicleType,
                Year = vehicle.Year,
                ImageIds = vehicle.Images.Select(x => x.Id).ToList()
            };

            return Ok(response);
        }

        private VehicleImage VehicleImageFromFormFile(IFormFile formFile, bool isThumbnail = false)
        {
            using var memoryStream = new MemoryStream();
            formFile.CopyTo(memoryStream);
            return new VehicleImage()
            {
                Id = Guid.NewGuid(),
                Content = memoryStream.ToArray(),
                ContentType = formFile.ContentType,
                IsThumbnail = isThumbnail,
            };
        }

        [HttpPost]
        [Authorize]
        public IActionResult Create([FromForm] CreateCarOfferRequest request)
        {
            var owner = new Owner()
            {
                Id = Guid.NewGuid(),
                FirstName = request.FirstName,
                Email = request.Email,
                LastName = request.LastName,
                PhoneNumber = request.PhoneNumber,
            };

            owner.Name = $"TempName {owner.Id}";

            var thumbnail = VehicleImageFromFormFile(request.Thumbnail, true);
            var images = request.Images.Select(x => VehicleImageFromFormFile(x)).ToList();
            images.Add(thumbnail);

            var vehicle = new Vehicle()
            {
                Id = Guid.NewGuid(),
                Brand = request.Brand,
                CreatedOn = DateTime.Now,
                Description = request.Description,
                FuelType = request.FuelType,
                Mileage = request.Mileage,
                Model = request.Model,
                Images = images,
                OwnerId = owner.Id,
                Owner = owner,
                Price = request.Price,
                Title = request.Title,
                VehicleType = request.VehicleType,
                Year = request.Year,
            };

            _dbContext.Vehicles.Add(vehicle);

            _dbContext.SaveChanges();


            return Redirect("/new-vehicle");
        }
    }
}
