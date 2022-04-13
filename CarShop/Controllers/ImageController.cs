using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace CarShop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImageController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ImageController(ApplicationDbContext dbContext)
        {
            _context = dbContext;
        }

        [HttpGet("{id}")]
        public IActionResult GetThumbnail(Guid id)
        {
            var thumbnail = _context.VehicleImages.FirstOrDefault(x => x.Id == id);
            if (thumbnail == null) return NotFound();
            return new FileContentResult(thumbnail.Content, thumbnail.ContentType);
        }
    }
}
