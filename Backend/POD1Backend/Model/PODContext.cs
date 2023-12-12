using Microsoft.EntityFrameworkCore;
using POD1Backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POD1.Model
{
    public class PODContext : DbContext
    {
        public PODContext(DbContextOptions options) : base(options)
        {

        }
            public DbSet<Users> Users { get; set; }
            public DbSet<State> State { get; set; }
            public DbSet<City> City { get; set; }
            public DbSet<EyParent> EyParent { get; set; }
            public DbSet<EyChild> EyChild { get; set; }
        
    }
}
