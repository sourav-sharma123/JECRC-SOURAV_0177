using System.ComponentModel.DataAnnotations;
using AirpodsAPI.Models.Attributes;

namespace AirpodsAPI.Models.DTO
{
    public class CreateAirpodDto
    {
        public int Id { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        public required string DeviceType { get; set; }

        [Required]
        public required string Category { get; set; }

        [PriceRange(500, 50000)]
        public decimal Price { get; set; }
    }
}