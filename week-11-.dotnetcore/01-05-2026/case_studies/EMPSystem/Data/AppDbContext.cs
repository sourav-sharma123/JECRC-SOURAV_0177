using EMPSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace EMPSystem.Data
{
    public class AppDbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Employee> Employees {get; set;} 
    }
}
