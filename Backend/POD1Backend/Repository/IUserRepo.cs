using POD1.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POD1.Repository
{
     public interface IUserRepo
    {
        Task<IEnumerable<Users>> GetUsers();
        Task<Users> Login(string email, string password);
        Task<Users> Logins(string email, string password, Users u);
        Task<Users> GetUserById(int id);
        Task<Users> GetUserByEmail(string email);
        Task<Users> UserSignUp(Users u);
        Task<Users> UpdateUser(Users u);
        Task<Users> UpdateUserWithEmail(Users u);
        Task<Users> DeleteUser(int id);
    }
}
