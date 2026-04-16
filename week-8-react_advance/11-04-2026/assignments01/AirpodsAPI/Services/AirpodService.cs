using AirpodsAPI.Entities;
using AirpodsAPI.Models.DTO;

namespace AirpodsAPI.Services
{
    public class AirpodService : IAirpodService
    {
        private static List<Airpod> airpods = new List<Airpod>();

        public void Create(CreateAirpodDto dto)
        {
            Airpod airpod = new Airpod
            {
                Id = dto.Id,
                Name = dto.Name,
                DeviceType = dto.DeviceType,
                Category = dto.Category,
                Price = dto.Price
            };

            airpods.Add(airpod);
        }

        public List<AirpodResponseDto> GetAll()
        {
            return airpods.Select(a => new AirpodResponseDto
            {
                Id = a.Id,
                Name = a.Name,
                DeviceType = a.DeviceType,
                Category = a.Category,
                Price = a.Price
            }).ToList();
        }

        public AirpodResponseDto GetById(int id)
        {
            var a = airpods.FirstOrDefault(x => x.Id == id);

            if (a == null)
            {
                throw new Exception("Airpod not found");
            }

            return new AirpodResponseDto
            {
                Id = a.Id,
                Name = a.Name,
                DeviceType = a.DeviceType,
                Category = a.Category,
                Price = a.Price
            };
        }

        public void Update(int id, CreateAirpodDto dto)
        {
            var a = airpods.FirstOrDefault(x => x.Id == id);

            if (a == null)
            {
                throw new Exception("Airpod not found");
            }

            a.Name = dto.Name;
            a.DeviceType = dto.DeviceType;
            a.Category = dto.Category;
            a.Price = dto.Price;
        }

        public void Delete(int id)
        {
            var a = airpods.FirstOrDefault(x => x.Id == id);

            if (a == null)
            {
                throw new Exception("Airpod not found");
            }

            airpods.Remove(a);
        }
    }
}