using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace POD1.Model
{
    public class Users
    {
        [Key]
        public int UserId { get; set; }
        [StringLength(30)]
        public string UserName { get; set; }
        public string EmployeeId { get; set; }
        public string Gender { get; set; }
        [StringLength(15)]
        public string PhoneNumber { get; set; }
        [StringLength(30)]
        public string Email { get; set; }
        [JsonIgnore] public string Password { get; set; }
        public string Department { get; set; }
        public string Location { get; set; }
        
        public string ImagePath { get; set; }
    }
}
