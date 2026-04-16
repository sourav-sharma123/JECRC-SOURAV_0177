using Microsoft.AspNetCore.Mvc;
using AirpodsAPI.Services;
using AirpodsAPI.Models.DTO;


namespace AirpodsAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AirpodsController : ControllerBase
    {
        private readonly IAirpodService _service;


        public AirpodsController(IAirpodService service)
        {
            _service = service;
        }


        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_service.GetAll());
        }


        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var result = _service.GetById(id);
            if (result == null) return NotFound();
            return Ok(result);
        }


        [HttpPost]
        public IActionResult Create(CreateAirpodDto dto)
        {
            _service.Create(dto);
            return Ok("Created Successfully");
        }


        [HttpPut("{id}")]
        public IActionResult Update(int id, CreateAirpodDto dto)
        {
            _service.Update(id, dto);
            return Ok("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok("Deleted Successfully");
        }

        [HttpPost("bulk")]
        public IActionResult BulkCreate(List<CreateAirpodDto> dtos)
        {
            foreach (var dto in dtos)
            {
                _service.Create(dto);
            }

            return Ok("Bulk data inserted successfully");
        }
    }
}