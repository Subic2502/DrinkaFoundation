using Api.Entities;
using API.Data;
using API.Data.Migrations;
using API.DTOs;
using API.Entities;
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

    [HttpGet("{id}")]
    public News GetOneNews(int id)
    {
        return _dataContext.News
        .Include(n => n.ListOfPhotos)
        .FirstOrDefault(n => n.Id == id);
    }

    [HttpPost("add-news")]
    public bool AddNews(AddingNewsDto addingNewsDto)
    {
        Console.Write("Uslo");
        try{
           List<Photo> listOfPhotos =  AddPhotos(addingNewsDto);
        News news = new News(addingNewsDto.ShortText,addingNewsDto.LongText,addingNewsDto.Author,addingNewsDto.Date,addingNewsDto.Title);

            _dataContext.News.Add(news);

           news.ListOfPhotos = listOfPhotos;

           _dataContext.SaveChanges();
            return true;
        }catch{
            return false;
        }
    }

    private List<Photo> AddPhotos(AddingNewsDto addingNewsDto)
    {
        List<string> listOfPhotosStrings = addingNewsDto.Photos;
        List<Photo> listOfPhotos = new List<Photo>();
        foreach(string photoString in listOfPhotosStrings)
        {
            Photo photo = new Photo(photoString);
            listOfPhotos.Add(photo);
        }
        return listOfPhotos;
    }
}