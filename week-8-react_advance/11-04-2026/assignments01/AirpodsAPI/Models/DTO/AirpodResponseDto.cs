namespace AirpodsAPI.Models.DTO
{
    public class AirpodResponseDto
    {
        public int Id { get; set; }

        public required string Name { get; set; }

        public required string DeviceType { get; set; }

        public required string Category { get; set; }

        public decimal Price { get; set; }
    }
}