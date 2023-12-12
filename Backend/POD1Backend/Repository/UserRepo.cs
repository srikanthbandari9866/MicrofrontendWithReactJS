using Microsoft.EntityFrameworkCore;
using POD1.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POD1.Repository
{
    public class UserRepo : IUserRepo
    {

        private readonly PODContext _podContext = null;
        public UserRepo(PODContext podContext)
        {
            _podContext = podContext;
        }


        public async Task<IEnumerable<Users>> GetUsers()
        {
            return await _podContext.Users.ToListAsync();
        }
        public async Task<Users> Login(string email, string password)
        {
            return await _podContext.Users
                .FirstOrDefaultAsync(e => e.Email == email && e.Password == password);
        }
        public async Task<Users> Logins(string email, string password,Users u)
        {
            if (BCrypt.Net.BCrypt.Verify(password,u.Password))
            {
                return await _podContext.Users
                .FirstOrDefaultAsync(e => e.Email == email);
            }
            return null;
        }
        public async Task<Users> GetUserById(int id)
        {
            return await _podContext.Users
                .FirstOrDefaultAsync(e => e.UserId == id);
        }
        public async Task<Users> GetUserByEmail(string email)
        {
            return await _podContext.Users
                .FirstOrDefaultAsync(e => e.Email == email);
        }
        //public async Task<Users> UserSignUp(Users u)
        //{
        //    var result = await _podContext.Users.AddAsync(u);
        //    await _podContext.SaveChangesAsync();
        //    return result.Entity;
        //}
        public async Task<Users> UserSignUp(Users u)
        {
            var res = new Users
            {
                UserName = u.UserName,
                EmployeeId = u.EmployeeId,
                Gender = u.Gender,
                PhoneNumber = u.PhoneNumber,
                Email = u.Email,
                Department = u.Department,
                Location = u.Location,
                ImagePath = u.ImagePath,
                Password = BCrypt.Net.BCrypt.HashPassword(u.Password)
            };
            var result = await _podContext.Users.AddAsync(res);
            await _podContext.SaveChangesAsync();
            return result.Entity;
        }
        public async Task<Users> UpdateUser(Users u)
        {
            var user = await _podContext.Users
                .FirstOrDefaultAsync(e => e.UserId == u.UserId);
            if (user != null)
            {
                //user.UserName = u.UserName;
                //user.PhoneNumber = u.PhoneNumber;
                //user.Email = u.Email;
                user.Password = BCrypt.Net.BCrypt.HashPassword(u.Password);
                //user.Balance = u.Balance;
                _podContext.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                await _podContext.SaveChangesAsync();
                return user;
            }
            return null;
        }
        public async Task<Users> UpdateUserWithEmail(Users u)
        {
            var user = await _podContext.Users
                .FirstOrDefaultAsync(e => e.Email == u.Email);
            if (user != null)
            {
                //user.UserName = u.UserName;
                //user.PhoneNumber = u.PhoneNumber;
                user.Email = u.Email;
                user.Password = u.Password;
                //user.Balance = u.Balance;
                _podContext.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                await _podContext.SaveChangesAsync();
                return user;
            }
            return null;
        }
        public async Task<Users> DeleteUser(int id)
        {
            var result = await _podContext.Users
                .FirstOrDefaultAsync(e => e.UserId == id);
            if (result != null)
            {
                _podContext.Users.Remove(result);
                await _podContext.SaveChangesAsync();
            }
            return null;
        }
    }
}
