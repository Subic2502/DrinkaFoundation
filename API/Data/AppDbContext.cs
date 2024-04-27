using Microsoft.EntityFrameworkCore;

public class AppDbContext:DbContext
{
    public AppDbContext(DbContextOptions options) : base(options)
    {
        
    }

    DbSet<News> News{get;set;}
    DbSet<Photo> Photos{get;set;}
}