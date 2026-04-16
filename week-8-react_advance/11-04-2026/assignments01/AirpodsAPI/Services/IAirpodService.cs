using AirpodsAPI.Models.DTO;


namespace AirpodsAPI.Services
{
    public interface IAirpodService
    {
        List<AirpodResponseDto> GetAll();
        AirpodResponseDto GetById(int id);
        void Create(CreateAirpodDto dto);
        void Update(int id, CreateAirpodDto dto);
        void Delete(int id);
    }
}