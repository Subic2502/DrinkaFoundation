using Api.Entities;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContex : DbContext
{
    public DataContex(DbContextOptions options) : base(options)
    {
    }

    public DbSet<News> News { get; set; }
    public DbSet<Photo> Photos { get; set; }
}
