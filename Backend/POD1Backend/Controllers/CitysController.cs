using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using POD1Backend.Model;
using POD1Backend.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POD1Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitysController : ControllerBase
    {
         private readonly ICityRepo _cityRepo;
        public CitysController(ICityRepo cityRepo)
        {
            _cityRepo = cityRepo;
        }

        [HttpGet]
        public async Task<ActionResult> GetCitys()
        {
            try
            {
                return Ok(await _cityRepo.GetCitys());
            }
            catch (Exception)
            {

                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving the data from the database");
            }
        }
        [HttpGet("State/{id}")]
        public ActionResult<IEnumerable<City>> GetCityByStateId(int id)
        {
            try
            {
                List<City> result = _cityRepo.GetCityByStateId(id);
                if (result == null) return NotFound();

                return result;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }
        [HttpGet("Statesss/{id}")]
        public async Task<IActionResult> GetCitiesByStateId(int id)
        {
            try
            {
                var result = await _cityRepo.GetCitiesByStateId(id);
                if (result == null) return NotFound();

                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }
    }
}
