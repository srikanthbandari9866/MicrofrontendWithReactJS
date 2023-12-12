using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using POD1.Model;
using POD1.Repository;

namespace POD1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepo _userRepo;
        public UsersController(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }
        [HttpGet("login/{email}/{password}")]
        public async Task<ActionResult<Users>> Logins(string email, string password)
        {
            try
            {
                
                var result = await _userRepo.Login(email, password);
                if (result == null) return NotFound();

                return result;
            }
            catch (Exception)
            {

                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Email or password are not matched");
            }
        } 
        [HttpGet("logins/{email}/{password}")]
        public async Task<ActionResult<Users>> Loginss(string email, string password)
        {
            try
            {
                var user = await _userRepo.GetUserByEmail(email);
                if(user != null)
                {
                    var result = await _userRepo.Logins(email, password, user);
                    //if (result == null) return NotFound();
                    return result;
                }
                else
                {
                    return NotFound();
                }

            }
            catch (Exception)
            {

                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Email or password are not matched");
            }
        }
        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
            try
            {
                return Ok(await _userRepo.GetUsers());
            }
            catch (Exception)
            {

                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving the data from the database");
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Users>> GetUsersById(int id)
        {
            try
            {
                var result = await _userRepo.GetUserById(id);

                if (result == null) return NotFound();

                return result;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }
        [HttpGet("email/{em}")]
        public async Task<ActionResult<Users>> GetUsersByEmail(string em)
        {
            try
            {
                var result = await _userRepo.GetUserByEmail(em);
                //if (result == null) return NotFound();
                return result;

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }
        [HttpPost]
        public async Task<ActionResult<Users>> SignUp(Users user)
        {
            try
            {
                if (user == null) return BadRequest();

                var res = await _userRepo.UserSignUp(user);
                return CreatedAtAction(nameof(GetUsers),
                    new { id = res.UserId }, res);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error in creating new User");
            }
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Users>> UpdateUsers(int id, Users user)
        {
            try
            {
                if (id != user.UserId) return BadRequest("User Id mismatched");

                var result = await _userRepo.GetUserById(id);
                if (result == null) return NotFound($"User with id = {id} not found");

                return await _userRepo.UpdateUser(user);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error updating the data");
            }
        }
        [HttpPut("email/{email}")]
        public async Task<ActionResult<Users>> UpdateUsersWithEmail(string email, Users user)
        {
            try
            {
                if (email != user.Email) return BadRequest("User email mismatched");

                var result = await _userRepo.GetUserByEmail(email);
                if (result == null) return NotFound($"User with email = {email} not found");

                return await _userRepo.UpdateUser(user);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error updating the data");
            }
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Users>> DeleteUsers(int id)
        {
            try
            {
                var result = await _userRepo.GetUserById(id);
                if (result == null) return NotFound($"User with Id = {id} not found");

                return await _userRepo.DeleteUser(id);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error deleting the data");
            }
        }
    }
}