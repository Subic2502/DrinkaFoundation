using Api.Entities;
using API.Data;
using API.Data.Migrations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsController:ControllerBase
{

    public readonly DataContex _dataContext;

    public NewsController(DataContex dataContext)
    {
        _dataContext = dataContext;
    }

    [HttpGet(Name="GetNews")]
    public List<News> GetAllNews()
    {
        return _dataContext.News
        .Include(n => n.ListOfPhotos)
        .ToList();
    }

}