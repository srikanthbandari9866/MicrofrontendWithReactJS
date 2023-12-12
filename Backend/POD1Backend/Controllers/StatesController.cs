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
    public class StatesController : ControllerBase
    {
        private readonly IStateRepo _stateRepo;
        public StatesController(IStateRepo stateRepo)
        {
            _stateRepo = stateRepo;
        }

        [HttpGet]
        public async Task<ActionResult> GetStates()
        {
            try
            {
                return Ok(await _stateRepo.GetStates());
            }
            catch (Exception)
            {

                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving the data from the database");
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<State>> GetStatesById(int id)
        {
            try
            {
                var result = await _stateRepo.GetStateById(id);

                if (result == null) return NotFound();

                return result;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }
    }
}
