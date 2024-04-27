

using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;


public class NewsController : BaseApiController
{
    public AppDbContext AppDbContext { get; }

    public NewsController(AppDbContext appDbContext)
    {
        this.AppDbContext = appDbContext;
    }

    
}