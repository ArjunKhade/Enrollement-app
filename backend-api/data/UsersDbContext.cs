using backend_api.Model;
using Microsoft.EntityFrameworkCore;
namespace backend_api.data
{
    public class UsersDbContext : DbContext
    {
     public UsersDbContext(DbContextOptions options):base(options){}

        //Dbset
        public DbSet<User> Users { get; set; }

    }
}
